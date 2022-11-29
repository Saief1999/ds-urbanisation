import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity("employees")
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "real" })
    salaryInDinars: number;
}