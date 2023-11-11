import { Injectable } from '@nestjs/common';
import { CreateListaProdottiDto } from './dto/create-lista-prodotti.dto';
import { UpdateListaProdottiDto } from './dto/update-lista-prodotti.dto';
import { ListaProdotti } from './entities/lista-prodotti.entity';

@Injectable()
export class ListaProdottiService {
  create(createListaProdottiDto: CreateListaProdottiDto) {
    const carrello= new ListaProdotti;
    carrello.nomeProdotto=createListaProdottiDto.nomeProdotto;
  }

  findAll() {
    return `This action returns all listaProdotti`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listaProdotti`;
  }

  update(id: number, updateListaProdottiDto: UpdateListaProdottiDto) {
    return `This action updates a #${id} listaProdotti`;
  }

  remove(id: number) {
    return `This action removes a #${id} listaProdotti`;
  }
}
