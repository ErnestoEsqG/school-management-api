# 🏫 School Management REST API

> Backend RESTful robusto para la administración académica de estudiantes, profesores y asignación de cursos, desarrollado con Node.js, Express, TypeScript, TypeORM y MySQL.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.x-black?logo=express&logoColor=white)](https://expressjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-0.3.x-FE0803?logo=typeorm&logoColor=white)](https://typeorm.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)

---

## 📌 Descripción

Esta API proporciona una solución backend completa para la gestión escolar. Permite administrar el ciclo de vida de los registros de estudiantes y docentes, así como orquestar la creación de cursos y la matriculación de alumnos a través de relaciones relacionales de base de datos modeladas mediante TypeORM.

Diseñado bajo principios de código limpio, tipado estricto con TypeScript y separación por capas (rutas, controladores, entidades y configuración de persistencia).

---

## 🚀 Tecnologías Principales

- **Runtime:** Node.js
- **Lenguaje:** TypeScript
- **Framework Web:** Express.js
- **ORM:** TypeORM (Data Mapper / Active Record pattern)
- **Base de Datos:** MySQL
- **Middlewares & Utilidades:** `cors`, `morgan`, `dotenv`, `ts-node-dev` / `nodemon`

---

## 🧱 Arquitectura y Modelo de Datos

El sistema implementa relaciones relacionales clave:
- **Profesor ↔ Curso:** Relación uno a muchos (Un profesor imparte uno o varios cursos).
- **Estudiante ↔ Curso:** Relación muchos a muchos (Un estudiante puede cursar varias materias y un curso matricula a múltiples estudiantes).

```text
src/
├── controllers/       # Lógica de negocio y manejo de peticiones HTTP
├── entities/          # Modelos de base de datos definidos con TypeORM
├── routes/            # Definición y enrutamiento modular de endpoints
├── db/                # Configuración de DataSource y conexión MySQL
└── index.ts           # Inicialización del servidor Express y middleware