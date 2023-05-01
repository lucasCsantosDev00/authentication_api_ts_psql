import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar"})
    userName: string

    @Column({ type: 'varchar', unique: true})
    email: string

    @Column({type : 'varchar'})
    password: string

}