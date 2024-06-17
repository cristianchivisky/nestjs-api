<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# NestJS Back-end API

Este repositorio contiene la API back-end desarrollada como parte de un desafío. La API está construida utilizando Node.js, NestJS y TypeScript. Interactúa con una base de datos PostgreSQL utilizando un ORM, gestiona datos de usuarios y productos, e incluye integración con ChatGPT de OpenAI a través de LangChain.


## Características

- Autenticación: Implementa JWT para la autenticación de usuarios.
- Gestión de Usuarios: Endpoints para crear, actualizar y eliminar usuarios.
- Gestión de Productos: Endpoints para crear, actualizar y eliminar productos.
- Listado de Productos: Endpoint para listar productos con paginación y filtros.
- Manejo de Errores y Validación de Datos: Manejo completo de errores y validación de datos en todos los endpoints.
- Documentación Swagger: Swagger integrado para facilitar las pruebas y documentación de la API.
- Integración ChatGPT: Endpoint para consultar a ChatGPT utilizando LangChain para casos de uso personalizados.


## Instalación

```bash
$ git clone https://github.com/cristianchivisky/nestjs-api.git

$ cd nestjs-api

$ npm install
```

## Configurar variables de entorno

Crea un archivo .env en el directorio raíz y agrega las variables de entorno.


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


## Licencia

Este proyecto está bajo la licencia: [MIT licensed](LICENSE).
