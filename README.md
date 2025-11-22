# Ng18Indra

- Desarrollo de aplicaciones Web Angular 12 (18)
- INDRA (Grupo Loyal)
- del 16 al 25 de septiembre
- en horario de 10 a 14h

[Repositorio](https://github.com/alce65/ng18.indra)

## Contenidos

- Herramientas.
- Introducción a Angular 12.
- TypeScript.
- Requisitos, herramientas y configuración.

- Componentes
  - Introducción a los componentes.
  - Plantillas, interpolación y directivas.
  - Data Binding y Pipes.
  - Componentes anidados.
- Uso de servicios.
- Rutas y navegación
- Conocer la arquitectura de Angular 6
- Crear Web Components con Angular 6
- Integrar servicios y bibliotecas
- Gestionar el ciclo de vida de la app
- Probar y evaluar la calidad del código de la app

## Requisitos del equipo

- Node.js - npm
- VSC (Visual Studio Code) - Extensiones
- Browser - Herramientas: Angular dev
- Angular CLI: `npm i -g @angular/cli`

## Introducción

- Framework de desarrollo frontend de aplicaciones Web.
- Basado en JS vía TypeScript.
- Creación de SPAs (Single Page Applications).
- Enrutamiento basado en vistas (páginas)
- Basado en componentes: vista - modelo (datos) => clase typescript
- Servicios: lógica de negocio -> clase typescript
- Hasta ahora usaba módulos, recientemente (v.17-18) se ha pasado a usar componentes standalone
- Angular CLI: herramienta de línea de comandos para crear, gestionar y desplegar aplicaciones Angular
- Entorno de testing unitario basado en Jasmine y Karma

## Creación del proyecto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

```sh
ng new ng18.indra ..create-application false
cd ng18.indra
ng g app demo1 --style css --ssr false -p ind -t -s
git add .
git commit -m "Add demo1 app"
ng add @angular-eslint/schematics
npm i -D prettier@latest
git add .
git commit -m "Add eslint & prettier"
```

## TypeScript

## Scripts

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
