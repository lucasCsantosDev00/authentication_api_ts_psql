import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from "typeorm"
import {hash} from 'bcrypt'

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

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 12)
    }

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    toResponse(): Partial<User> {
        const responseUser = new User();
        responseUser.id = this.id;
        responseUser.userName = this.userName;
        responseUser.email = this.email;
        responseUser.createdAt = this.createdAt;
        responseUser.updatedAt = this.updatedAt;

        return responseUser
    }
}