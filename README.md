<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# NestJS Back-end API

Este repositorio contiene la API de back-end desarrollada como parte de un desafío. La API está construida utilizando Node.js, NestJS y TypeScript. Implementa varias mejores prácticas y principios arquitectónicos como KISS, DRY y SOLID. La API interactúa con una base de datos PostgreSQL utilizando un ORM, gestiona datos de usuarios y productos, e incluye integración con ChatGPT de OpenAI a través de LangChain.


## Características

- Autenticación: Implementa JWT para la autenticación de usuarios.
- Gestión de Usuarios: Endpoints para crear, actualizar y eliminar usuarios.
- Gestión de Productos: Endpoints para crear, actualizar y eliminar productos.
- Listado de Productos: Endpoint para listar productos con paginación y filtros.
- Manejo de Errores y Validación de Datos: Manejo completo de errores y validación de datos en todos los endpoints.
- Documentación Swagger: Swagger integrado para facilitar las pruebas y documentación de la API.
- Integración ChatGPT: Endpoint para consultar ChatGPT utilizando LangChain para casos de uso personalizados.


## Instalación

```bash
$ git clone https://github.com/cristianchivisky/nestjs-api.git

$ cd nestjs-api

$ npm install
```

## Configurar variables de entorno

Crear un archivo .env en el directorio raíz y agrega las variables de entorno.


## Ejecutar la aplicación

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Uso

La API se puede probar utilizando Swagger. Una vez que la aplicación esté en ejecución, accede a http://localhost:3000/api para acceder a la documentación de Swagger.


## Conceptos

- Middleware en una Aplicación de Backend
Las funciones de middleware se utilizan para manejar las solicitudes antes de que lleguen a los controladores de endpoints. Se pueden utilizar para registro, autenticación, validación, manejo de errores y más. En esta aplicación, el middleware se utiliza para la autenticación JWT.

- Inyección SQL y Prevención
La inyección SQL es una técnica de inyección de código que explota vulnerabilidades en el software de la aplicación al insertar declaraciones SQL maliciosas en un campo de entrada. Para prevenir la inyección SQL, esta aplicación utiliza un ORM (TypeORM), que proporciona consultas parametrizadas que escapan las entradas de usuario.

- Transacciones SQL
Las transacciones SQL se utilizan para ejecutar una secuencia de consultas como una sola unidad de trabajo. Son útiles cuando se necesitan realizar múltiples operaciones de manera atómica. Por ejemplo, en una aplicación financiera, transferir dinero de una cuenta a otra utilizaría una transacción para garantizar que tanto las operaciones de débito como de crédito tengan éxito o fallo juntas.

- Ejemplo de Aprovechamiento del Paralelismo con Async/Await
Async/await permite la ejecución de operaciones asíncronas de manera no bloqueante. Al utilizar Promise.all, múltiples operaciones asíncronas pueden ejecutarse en paralelo, mejorando el rendimiento.


## Licencia

Este proyecto está bajo la Licencia [MIT licensed](LICENSE).
