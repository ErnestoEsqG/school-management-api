import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('students')
export class Student {

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}