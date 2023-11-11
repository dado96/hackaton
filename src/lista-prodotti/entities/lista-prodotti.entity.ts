import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'lista_prodotti'})
export class ListaProdotti extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeProdotto: string;
}
 