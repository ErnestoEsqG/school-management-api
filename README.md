# 🏫 School Management REST API

REST API para la gestión de **estudiantes, profesores y cursos**, desarrollada con **Node.js, Express, TypeScript, TypeORM y MySQL**.

Este proyecto fue realizado con fines de aprendizaje para practicar el desarrollo de APIs REST, operaciones CRUD, persistencia de datos y relaciones entre entidades utilizando TypeORM.

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.x-black?logo=express&logoColor=white)](https://expressjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-ORM-FE0803?logo=typeorm&logoColor=white)](https://typeorm.io/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)

---

## 📌 Descripción

La API permite administrar información relacionada con un sistema escolar mediante endpoints REST.

### Funcionalidades principales

- Gestión de estudiantes.
- Gestión de profesores.
- Gestión de cursos.
- Asignación de profesores a cursos.
- Inscripción de estudiantes en cursos.
- Persistencia de datos en MySQL mediante TypeORM.

El proyecto está organizado separando rutas, controladores, modelos y configuración de base de datos.

---

## 🚀 Tecnologías

- **Node.js**
- **TypeScript**
- **Express.js**
- **TypeORM**
- **MySQL**
- **mysql2**
- **cors**
- **morgan**
- **dotenv**
- **ts-node-dev**

---

## 🧱 Arquitectura

```text
src/
├── controllers/       # Manejo de peticiones y lógica de cada recurso
├── db/                # Configuración de conexión con MySQL
├── models/            # Entidades definidas con TypeORM
├── routes/            # Endpoints de la API
├── app.ts             # Configuración de Express y middlewares
└── index.ts           # Inicialización de la base de datos y servidor
```

Flujo general de una petición:

```text
HTTP Request
     ↓
   Routes
     ↓
 Controllers
     ↓
TypeORM Repository
     ↓
   MySQL
```

---

## 🔗 Modelo de datos

El sistema utiliza tres entidades principales:

- **Student**
- **Professor**
- **Course**

### Professor → Course

Un profesor puede impartir varios cursos.

```text
Professor 1 ───────── N Course
```

### Student ↔ Course

Un estudiante puede estar inscrito en varios cursos y cada curso puede contener varios estudiantes.

```text
Student N ───────── N Course
```

La relación muchos a muchos se almacena mediante una tabla intermedia:

```text
students_courses
```

---

## 📡 Endpoints

### Students

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/students` | Obtener todos los estudiantes |
| `GET` | `/students/:id` | Obtener un estudiante por ID |
| `POST` | `/students` | Registrar un estudiante |
| `PUT` | `/students/:id` | Actualizar un estudiante |
| `DELETE` | `/students/:id` | Eliminar un estudiante |

Ejemplo para registrar un estudiante:

```json
{
  "dni": "12345678",
  "name": "John",
  "last_name": "Doe",
  "email": "john@example.com"
}
```

### Professors

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/professors` | Obtener todos los profesores |
| `GET` | `/professors/:id` | Obtener un profesor por ID |
| `POST` | `/professors` | Registrar un profesor |
| `PUT` | `/professors/:id` | Actualizar un profesor |
| `DELETE` | `/professors/:id` | Eliminar un profesor |

### Courses

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/courses` | Obtener todos los cursos |
| `GET` | `/courses/:id` | Obtener un curso por ID |
| `POST` | `/courses` | Crear un curso |
| `PUT` | `/courses/:id` | Actualizar un curso |
| `DELETE` | `/courses/:id` | Eliminar un curso |
| `POST` | `/courses/registerStudent` | Inscribir un estudiante en un curso |

Ejemplo de inscripción:

```json
{
  "student_id": 1,
  "course_id": 1
}
```

Las consultas de cursos incluyen la información del profesor asociado y de los estudiantes inscritos.

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/ErnestoEsqG/school-management-api.git
cd school-management-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
```

> El archivo `.env` contiene información sensible y no debe incluirse en el repositorio.

### 4. Configurar MySQL

Crea la base de datos indicada en `DB_NAME` y asegúrate de contar con las tablas necesarias para las entidades del proyecto.

La sincronización automática de TypeORM se encuentra desactivada.

### 5. Ejecutar el proyecto

```bash
npm run dev
```

El servidor se ejecuta por defecto en:

```text
http://localhost:3000
```

---

## 📜 Scripts

### Desarrollo

```bash
npm run dev
```

Ejecuta el servidor utilizando `ts-node-dev`.

### Compilar

```bash
npm run build
```

Compila el código TypeScript a JavaScript.

### Ejecutar versión compilada

```bash
npm start
```

Ejecuta la aplicación compilada desde el directorio `build/`.

---

## 🎯 Conceptos practicados

Durante el desarrollo de este proyecto practiqué:

- Diseño de endpoints REST.
- Métodos HTTP y códigos de estado.
- Operaciones CRUD.
- Express Router.
- Organización mediante rutas y controladores.
- TypeScript aplicado al backend.
- Entidades y repositorios con TypeORM.
- Relaciones `One-to-Many` y `Many-to-Many`.
- Conexión entre Node.js y MySQL.
- Manejo de variables de entorno.

---

## 📚 Contexto del proyecto

Este proyecto fue desarrollado siguiendo un curso como parte de mi proceso de aprendizaje de desarrollo backend.

A partir de la implementación base realicé ajustes y refactorizaciones para trabajar con TypeScript, organizar la estructura del proyecto y comprender el funcionamiento de una API REST conectada a una base de datos relacional.

---
