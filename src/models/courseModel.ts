import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, JoinTable, ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Professor} from "./professorsModel";
import {Student} from "./studentsModel";

@Entity('courses')
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column('text')
    description: String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Professor, (professor) => professor.courses)
    @JoinColumn({ name: "professor_id" })
    professor: Professor;

    @ManyToMany(() => Student)
    @JoinTable({
        name: "students_courses",
        joinColumn: {name: 'course_id'},
        inverseJoinColumn: { name: "student_id" },
    })
    students: Student[];
}

