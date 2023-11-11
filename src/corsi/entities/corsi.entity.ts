//id corso, nome corso, durata corso, luogo
//create, delete, update

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity ({name: 'corsi'})
export class Corsi extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeCorso: string;

    @Column ()
    durataCorso: number;

    @Column()
    luogo: string;
}
