# Desarrollo de aplicaciones Web Angular 12 (18)

INDRA (Grupo Loyal)
del 16 al 25 de septiembre
en horario de 10 a 14h

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
- VSC (Visual Studio Code)
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
