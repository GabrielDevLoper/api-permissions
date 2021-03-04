import {BeforeInsert, Column, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("permissions")
export class Permission {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @BeforeInsert()
    async generatedUuid(){
        this.id = uuid();
    }

}
