import {BeforeInsert, Column, Entity, PrimaryColumn, Unique} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("products")
export class Product {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @BeforeInsert()
    generatedUuid(){
        this.id = uuid();
    }

}
