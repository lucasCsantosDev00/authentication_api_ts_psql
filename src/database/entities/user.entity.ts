import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column({type: "varchar"})
    userName: string

    @Column({ type: 'varchar', unique: true})
    email: string

    @Column({type : 'varchar'})
    password: string

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}