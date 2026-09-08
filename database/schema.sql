CREATE TABLE professors (
                            id INT NOT NULL AUTO_INCREMENT,
                            dni VARCHAR(255) NOT NULL,
                            name VARCHAR(255) NOT NULL,
                            last_name VARCHAR(255) NOT NULL,
                            email VARCHAR(255) NOT NULL,
                            profesion VARCHAR(255) NOT NULL,
                            phone VARCHAR(255) NOT NULL,
                            createdAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                            updatedAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                            PRIMARY KEY (id)
);

CREATE TABLE students (
                          id INT NOT NULL AUTO_INCREMENT,
                          dni VARCHAR(255) NOT NULL,
                          name VARCHAR(255) NOT NULL,
                          last_name VARCHAR(255) NOT NULL,
                          email VARCHAR(255) NOT NULL,
                          createdAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                          updatedAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                          PRIMARY KEY (id)
);

CREATE TABLE courses (
                         id INT NOT NULL AUTO_INCREMENT,
                         name VARCHAR(255) NOT NULL,
                         description TEXT NOT NULL,
                         createdAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                         updatedAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                         professor_id INT,
                         PRIMARY KEY (id),
                         CONSTRAINT fk_courses_professor
                             FOREIGN KEY (professor_id)
                                 REFERENCES professors(id)
                                 ON DELETE SET NULL
                                 ON UPDATE CASCADE
);

CREATE TABLE students_courses (
                                  course_id INT NOT NULL,
                                  student_id INT NOT NULL,
                                  PRIMARY KEY (course_id, student_id),

                                  CONSTRAINT fk_students_courses_course
                                      FOREIGN KEY (course_id)
                                          REFERENCES courses(id)
                                          ON DELETE CASCADE
                                          ON UPDATE CASCADE,

                                  CONSTRAINT fk_students_courses_student
                                      FOREIGN KEY (student_id)
                                          REFERENCES students(id)
                                          ON DELETE CASCADE
                                          ON UPDATE CASCADE
);