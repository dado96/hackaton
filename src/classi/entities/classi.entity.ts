import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Classi extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    materie: string[];

    @Column()
    rangeEta: number;

}
