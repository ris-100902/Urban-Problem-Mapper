import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['email'])
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }
}