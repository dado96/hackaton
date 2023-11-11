import { Injectable } from '@nestjs/common';
import { CreateCorsiDto } from './dto/create-corsi.dto';
import { UpdateCorsiDto } from './dto/update-corsi.dto';
import { Corsi } from './entities/corsi.entity';

@Injectable()
export class CorsiService
{
  async create(createCorsiDto: CreateCorsiDto) 
  {
    const corso= new Corsi();
      corso.nomeCorso=createCorsiDto.nomeCorso;
      corso.durataCorso=createCorsiDto.durataCorso;
      corso.luogo=createCorsiDto.luogo;
       await corso.save();
      return corso;
  }

  findAll()
  {
    return  Corsi.find();
  }

  async findNomeCorso()
  {
    const corso = await Corsi.find();
    const filtro= corso.map(corso =>
      {
        return corso.nomeCorso;
      });
    return filtro;
  }

  async findLuogo()
  {
    const corsi = await Corsi.find();
    const filtro= corsi.map(corso =>
      {
        return corso.luogo;
      });
    return filtro;
  }


  async sommatoria()
  {
    const corsi= await Corsi.find();
    var result= 0;
    corsi.forEach(corso =>
    {
      result= corso.durataCorso+ result
    });
    return result;
  }

  findOne(id: number)
  {
    return Corsi.findOneBy({id});
  }

  async update (id: number, updateCorsiDto: UpdateCorsiDto)
  {
    const corso = await Corsi.findOneBy({ id: id });
    corso.nomeCorso = updateCorsiDto.nomeCorso;
    corso.durataCorso = updateCorsiDto.durataCorso;
    corso.luogo=updateCorsiDto.luogo;
    await corso.save();
    return corso;
  }

 async remove(id: number)
  {
    const corso = await Corsi.findOneBy({id});
    return corso.remove ();
  }
}
