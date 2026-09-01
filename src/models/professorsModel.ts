import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Course} from "./courseModel";

@Entity('professors')
export class Professor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: String;

    @Column()
    name: String;

    @Column()
    last_name: String;

    @Column()
    email: String;

    @Column()
    profesion: String;

    @Column()
    phone: String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Course, (course) => course.professor)
    courses: Course[];

}