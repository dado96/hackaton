import { IsOptional } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Esami extends BaseEntity
{
    @IsOptional({ always: true })
    @PrimaryGeneratedColumn()
    idEsame: number;

    @Column()
    nomeMateria: string;

    @Column()
    idAlunno: number;

    @Column()
    nomeAlunno: string;

    @Column()
    cognomeAlunno: string;

    @Column()
    nomeDocente: string;

    @Column()
    dataEsame: Date;
}
