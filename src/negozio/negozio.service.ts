import { Injectable } from '@nestjs/common';
import { CreateNegozioDto } from './dto/create-negozio.dto';
import { UpdateNegozioDto } from './dto/update-negozio.dto';
import { Negozio } from './entities/negozio.entity';

@Injectable()
export class NegozioService {
  create(createNegozioDto: CreateNegozioDto) {
    const negozio= new Negozio();
    negozio.nomeNegozio=createNegozioDto.nomeNegozio;
    negozio.citta=createNegozioDto.citta;
    negozio.indirizzo=createNegozioDto.indirizzo;
    negozio.orarioApertura=createNegozioDto.orarioApertura;
    negozio.orarioChiusura=createNegozioDto.orarioChiusura;
    return negozio.save();
  }

  async findAll() {
    console.log("Etrato")
    return  await Negozio.find();
  }

  findOne(id: number) 
  {
    return Negozio.findOne( { where: { id: id}});
  }

  update(id: number, updateNegozioDto: UpdateNegozioDto) {
    return Negozio.update(id, updateNegozioDto);
  }

  async remove(id: number) {
    const negozio= await Negozio.findOneBy( {  id: id});
    await Negozio.remove(negozio);
  }
}
