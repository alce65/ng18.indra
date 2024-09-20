# OBSERVABLES

Los observables son la representación de un **flujo de datos** (**stream**) síncrono o asíncrono, como son las peticiones HTTP, eventos del DOM, WebSockets, etc.
Podemos suscribirnos a estos flujos para recibir los datos que emiten.
De esa forma cuando el flujo cambia, nuestra suscripción reacciona.

En la práctica es similar al then de las promesas, con una diferencia clave

- una promesa solo se resuelve una vez, fulfilled o rejected, mientras que
- un observable puede emitir un número indeterminado de datos y errores

En la práctica los Observables ligados al protocolo Http solo emiten una vez,
pero eso es propio del protocolo, no de los observables

## Implementación de observables

Se basa en el uso de la librería [RxJS](https://rxjs.dev/), que proporciona entre otras la clase Observable.

El uso de esta librería, dada su aproximación funcional, usando de forma declarativa la composición de funciones, que se encadenan para formar el flujo de datos, da lugar a lo que se conoce como programación reactiva funcional (RFP, "Reactive Functional Programming").

Por convenio, los observables terminan con el signo $, para diferenciarlos de otras variables.

Al suscribirnos a un observable le proporcionamos la callback que se ejecutara ante cada dato

```ts
observable$.subscribe((data) => console.log(data));
```

Si necesitamos pasarle más callback lo haremos en forma de objeto

```ts
observable$.subscribe({
  next: (data) => console.log(data),
  error: (error: Error) => console.error(error.message),
  complete: () => {}, // make anyway
});
```

También es posible la des-suscripción de un observable, para ello guardamos la suscripción en una variable y llamamos a su método unsubscribe

```ts
const subscription = observable$.subscribe((data) => console.log(data));
subscription.unsubscribe();
```

## Tipos de observables

- **Cold**:
  - Comienza a emitir datos cuando se suscribe algún observador
  - Cada suscripción crea un **nuevo** flujo de datos
  - Corresponde al comportamiento por defecto de los **Observable**
  - **Unicast**: Cada suscripción crea un nuevo flujo de datos
  - **Finitos**: Emite un número finito de datos y luego se completa
- **Hot**:
  - Comienza a emitir datos al antes de que se suscriba ningún observador
  - Cada suscripción **comparte** el mismo flujo de datos
  - Corresponde al comportamiento de los **Subject** (Subject, ReplaySubject, BehaviorSubject, y AsyncSubject)
  - **Multicast**: Cada suscripción comparte el mismo flujo de datos
  - **Infinitos**: Emite un número infinito de datos. En este caso es necesario des-suscribirse manualmente.

La respuesta del servidor HTTP es un observable **Cold**, ya que cada suscripción crea un nuevo flujo de datos que se completa y finaliza al llegar la respuesta Http o al cabo de un tiempo si ésta no llega.

```ts repo.service.ts
  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
```

```ts component.ts
  public repoService inject(RepoService): any[] = [];
  const observable$ = this.repoService.getPosts();
  observable$.subscribe( data => console.log(data));
```

El patrón declarativo para este caso usaría el pipe async en el template

```ts component.ts
  public repoService inject(RepoService): any[] = [];
```

```html component.ts
@if(repoService.getPosts() | async; as posts) { @for(post of posts; trackBy: post.id) {
<div *ngFor="let post of ">{{ post.title }}</div>
} }
```

Los estados reactivos de Angular son observables **Hot**, basados en algún tipo de Subject, de modo que pueden compartirse entre todos los componentes que los usan.

```ts state.service
  private stateSubject = new BehaviorSubject<State>({});
  public state$ = this.stateSubject.asObservable();
```

```ts component.ts
  public stateService inject(StateService): State = {};
  const observable$ = this.stateService.state$;
```

```html component.ts
@if(stateService.state$ | async; as state) {
<div>{{ state.value }}</div>
}
```

## [Operadores de observables](https://rxjs.dev/guide/operators)

Con los operadores de RxJS podemos transformar, filtrar, combinar, agrupar, etc. los datos que emite un observable.

Los operadores son funciones que toman un observable como entrada y devuelven otro observable.

```ts
observable$
  .pipe(
    map((data) => data.value),
    filter((value) => value > 10),
    tap((value) => console.log(value)),
    catchError((error) => of("Error: " + error.message)),
    finalize(() => console.log("Complete")),
  )
  .subscribe((data) => console.log(data));
```

Operadores comunes para la creación de observables:

- **of**: Crea un observable a partir de una lista de valores
- **from**: Crea un observable a partir de un array, un iterable, un promise, un observable, etc.
- **fromEvent**: Crea un observable a partir de un evento del DOM
- **range**: Crea un observable que emite un rango de valores
- **interval**: Crea un observable que emite un número infinito de valores a intervalos regulares
- **timer**: Crea un observable que emite un valor después de un tiempo determinado
- **throwError**: Crea un observable que emite un error
- **empty**: Crea un observable que no emite ningún valor
- **never**: Crea un observable que no emite ningún valor y nunca se completa
- **defer**: Crea un observable que se crea cada vez que se suscribe

Operadores comunes para la transformación de observables:

- **take**: Emite un número determinado de valores emitidos por un observable
- **takeUntil**: Emite los valores emitidos por un observable hasta que se emita un valor por otro observable
- **takeWhile**: Emite los valores emitidos por un observable mientras se cumpla una condición
- **skip**: Ignora un número determinado de valores emitidos por un observable
- **skipUntil**: Ignora los valores emitidos por un observable hasta que se emita un valor por otro observable
- **skipWhile**: Ignora los valores emitidos por un observable mientras se cumpla una condición
- **map**: Transforma los valores emitidos por un observable
- **tap**: Realiza una acción sin modificar los valores emitidos por un observable
- **retry**: Reintenta emitir los valores emitidos por un observable un número determinado de veces
- **finalize**: Realiza una acción cuando un observable se completa
- **reduce**: Acumula los valores emitidos por un observable, emitiendo el resultado al final
- **scan**: Acumula los valores emitidos por un observable, emitiendo el resultado en cada paso
- **filter**: Filtra los valores emitidos por un observable

- **concat**: Combina los valores emitidos por varios observables en un solo observable
- **merge**: Combina los valores emitidos por varios observables en un solo observable
- **combineLatest**: Combina los valores emitidos por varios observables en un solo observable, emitiendo un array con los últimos valores emitidos
- **zip**: Combina los valores emitidos por varios observables en un solo observable, emitiendo un array con los valores emitidos en el mismo índice
- **forkJoin**: Combina los valores emitidos por varios observables en un solo observable, emitiendo un array con los últimos valores emitidos por cada observable

- **switchMap**: Transforma los valores emitidos por un observable en otro observable
- **mergeMap**: Transforma los valores emitidos por un observable en otro observable y los combina
- **concatMap**: Transforma los valores emitidos por un observable en otro observable y los concatena
- **exhaustMap**: Transforma los valores emitidos por un observable en otro observable y los ignora hasta que se complete
- **catchError**: Captura los errores emitidos por un observable y los maneja
- **throwError**: Emite un error

## [Subject](https://rxjs.dev/guide/subject)

Los Subject y demás **"hot observables"** son observables y observadores al mismo tiempo, es decir, pueden emitir valores y suscribirse a ellos.

Los Subject son útiles para compartir un flujo de datos entre varios observadores, ya que todos los observadores comparten el mismo flujo de datos.

```ts
// source.ts
const subject = new Subject<number>();
export const subject$ = subject.asObservable();
subject.next(1);
subject.next(2);
```

```ts
import { subject } from "source";

let state: number;
subject.subscribe((value) => {
  state = value;
  console.log(state);
});
```
