import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Issue{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column({ type: 'text'})
    description: string;

    @Column({type: 'decimal', precision: 9, scale: 6})
    lat: number;

    @Column({type: 'decimal', precision: 9, scale: 6})
    lng: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({default: "Open"})
    status: string = "Open";

    @ManyToOne(type => User, user => user.issues, {onDelete: 'CASCADE', eager: true, nullable: false})
    createdBy: User;
}