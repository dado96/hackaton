import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'negozio'})
export class Negozio extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeNegozio: string;

    @Column()
    citta: string;

    @Column()
    indirizzo: string;

    @Column()
    orarioApertura: number;

    @Column()
    orarioChiusura: number;
    
}
