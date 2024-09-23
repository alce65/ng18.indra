# REST (representational state transfer)

## HTTP

- protocolo HTTP/s
- request
- responses
- client/server
- 1 request --> 1 response
- sin persistencia del estado
- se añaden cookies para dar persistencia

## Request

- método: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `OPTIONS`
- URL
- headers
- body (?)

## API Rest

- El método define la acción
- La URL define el recurso
- El body opcionalmente define los datos

Obtener todos los usuarios
Recurso: http://api.com/users
Método: GET

Obtener un usuario
Recurso: http://api.com/users/1
Método: GET

Añadir usuario
Recurso: http://api.com/users
Método: POST
Body: { "name": "pepe", "age": 30 }

Modificar usuario
Recurso: http://api.com/users/1
Método: (PUT) / PATCH
Body: { "age": 31 }

Eliminar usuario
Recurso: http://api.com/users/1
Método: DELETE
