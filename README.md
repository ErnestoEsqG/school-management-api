# 🏫 School Management REST API

REST API for managing **students, professors, and courses**, built with **Node.js, Express, TypeScript, TypeORM, and MySQL**.

This project was created as a learning project to practice REST API development, CRUD operations, database persistence, and entity relationships using TypeORM.

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.x-black?logo=express&logoColor=white)](https://expressjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-ORM-FE0803?logo=typeorm&logoColor=white)](https://typeorm.io/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)

---

## 📌 Description

The API manages information related to a school management system through REST endpoints.

### Main features

- Student management
- Professor management
- Course management
- Professor assignment to courses
- Student enrollment in courses
- Data persistence in MySQL using TypeORM

The project is organized by separating routes, controllers, models, and database configuration.

---

## 🚀 Technologies

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

## 🧱 Architecture

The source code is organized as follows:

```text
src/
├── app.ts
├── index.ts
│
├── controllers/
│   ├── coursesController.ts
│   ├── professorsController.ts
│   └── studentsController.ts
│
├── db/
│   └── connection.ts
│
├── models/
│   ├── courseModel.ts
│   ├── professorsModel.ts
│   └── studentsModel.ts
│
└── routes/
    ├── coursesRoutes.ts
    ├── professorsRoutes.ts
    └── studentsRoutes.ts
```

### Request flow

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

### Responsibilities

- **`app.ts`** — Configures Express, middleware, and the main API routes.
- **`index.ts`** — Initializes the database connection and starts the HTTP server.
- **`controllers/`** — Handles requests and CRUD operations for each resource.
- **`db/`** — Contains the TypeORM DataSource and MySQL connection configuration.
- **`models/`** — Defines the database entities and their relationships.
- **`routes/`** — Defines the available HTTP endpoints for each resource.

---

## 🔗 Data Model

The system uses three main entities:

- **Student**
- **Professor**
- **Course**

### Professor → Course

A professor can teach multiple courses.

```text
Professor 1 ───────── N Course
```

### Student ↔ Course

A student can be enrolled in multiple courses, and each course can contain multiple students.

```text
Student N ───────── N Course
```

The many-to-many relationship is stored through an intermediate table:

```text
students_courses
```

---

## 📡 API Endpoints

### Students

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/students` | Get all students |
| `GET` | `/students/:id` | Get a student by ID |
| `POST` | `/students` | Create a student |
| `PUT` | `/students/:id` | Update a student |
| `DELETE` | `/students/:id` | Delete a student |

Example request body:

```json
{
  "dni": "12345678",
  "name": "John",
  "last_name": "Doe",
  "email": "john@example.com"
}
```

### Professors

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/professors` | Get all professors |
| `GET` | `/professors/:id` | Get a professor by ID |
| `POST` | `/professors` | Create a professor |
| `PUT` | `/professors/:id` | Update a professor |
| `DELETE` | `/professors/:id` | Delete a professor |

### Courses

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/courses` | Get all courses |
| `GET` | `/courses/:id` | Get a course by ID |
| `POST` | `/courses` | Create a course |
| `PUT` | `/courses/:id` | Update a course |
| `DELETE` | `/courses/:id` | Delete a course |
| `POST` | `/courses/registerStudent` | Enroll a student in a course |

Example enrollment request:

```json
{
  "student_id": 1,
  "course_id": 1
}
```

Course queries also include the associated professor and enrolled students.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ErnestoEsqG/school-management-api.git
cd school-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root based on `.env.example`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
```

> The `.env` file may contain sensitive information and should not be committed to the repository.

### 4. Configure MySQL

Create the database specified in `DB_NAME` and make sure the required tables exist.

TypeORM automatic synchronization is disabled in this project.

### 5. Run the project

```bash
npm run dev
```

The server runs by default at:

```text
http://localhost:3000
```

---

## 📜 Scripts

### Development

```bash
npm run dev
```

Runs the development server using `ts-node-dev`.

### Build

```bash
npm run build
```

Compiles the TypeScript source code into JavaScript.

### Start

```bash
npm start
```

Runs the compiled application from the `build/` directory.

---

## 🎯 Concepts Practiced

Through this project, I practiced:

- REST API design
- HTTP methods and status codes
- CRUD operations
- Express Router
- Route and controller organization
- TypeScript for backend development
- TypeORM entities and repositories
- `One-to-Many` relationships
- `Many-to-Many` relationships
- Node.js and MySQL integration
- Environment variable management

---

## 📚 Project Context

This project was developed while following a backend development course as part of my learning process.

Starting from the course implementation, I made adjustments and refactorings to work with TypeScript, organize the project structure, configure environment variables, and better understand the flow of a REST API connected to a relational database.

---

## 👤 Author

**Ernesto Esqueda**

Computer Science Engineering student.
