# API de Gestión de Productos

Esta es una API RESTful desarrollada con **Nest.js** y **PostgreSQL** para la gestión de productos en un inventario. Permite crear, leer, actualizar y eliminar productos. La aplicación está documentada utilizando **Swagger**.

## Tabla de Contenidos

- [API de Gestión de Productos](#api-de-gestión-de-productos)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Configuracion de entorno](#configuracion-de-entorno)
  - [Configuracion de entorno](#configuracion-de-entorno-1)
  - [Documentación de Swagger](#documentación-de-swagger)

## Requisitos

Asegúrate de tener instalado en tu máquina lo siguiente:

- [Node.js](https://nodejs.org/) (LTS recomendado)
- [PostgreSQL](https://www.postgresql.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) (se incluye con Node.js)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

## Configuracion de entorno

1. **Crea una base de datos en PostgreSQL:**

  Puedes crear una base de datos llamada productos_db (o el nombre que prefieras) con el siguiente comando en tu consola de PostgreSQL:

   ```sql
   CREATE DATABASE acme;
   ```

2. **Configura la conexión a la base de datos:**
   
   Abre el archivo **src/app.module.ts** y modifica la configuración de TypeORM para apuntar a tu base de datos:

   ```ts
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'acme',
      entities: [Product],
      synchronize: true, // Cambiar a false en producción
  }),
   ```

  Asegúrate de cambiar 'tu_usuario' y 'tu_contraseña' a tus credenciales de PostgreSQL.

## Configuracion de entorno

  Para iniciar la aplicación, utiliza el siguiente comando:

  ```bash
   npm run start
  ```

  La API estará disponible en http://localhost:3000.

## Documentación de Swagger

  La documentación de la API está disponible en:

  ```bash
   [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
  ```

  Puedes ver todos los endpoints, ejemplos de solicitudes y respuestas, y más información sobre cómo interactuar con la API.