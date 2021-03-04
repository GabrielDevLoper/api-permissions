import {BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { hash } from "bcryptjs";
import { IsEmail, IsNotEmpty,  } from "class-validator";

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    @IsNotEmpty({message: "Nome é obrigatório"})
    name: string;

    @Column({
        unique: true,
    })
    @IsEmail({}, {message: "Email incorreto!"})
    @IsNotEmpty({message: "O email é obrigatório"})
    email: string;

    @Column()
    password: string;

    @Column({
        default: false
    })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
    @BeforeInsert()
    generatedUuid(){
        this.id = uuid();
    }


    @BeforeInsert()
    @BeforeUpdate()
    async passwordHash(){
        this.password = await hash(this.password, 8);
    }
}

export { User };
