import { IsOptional } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Docenti extends BaseEntity{
    @IsOptional({ always: true })
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    materia: string

}


