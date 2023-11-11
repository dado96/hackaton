import { Injectable } from '@nestjs/common';
import { CreateDocentiDto } from './dto/create-docenti.dto';
import { UpdateDocentiDto } from './dto/update-docenti.dto';
import { Docenti } from './entities/docenti.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DocentiService extends TypeOrmCrudService <Docenti>{
  constructor(@InjectRepository(Docenti) repo){
    super(repo);
  }
  // create(createDocentiDto: CreateDocentiDto) {
  //   return 'This action adds a new docenti';
  // }

  // findAll() {
  //   return `This action returns all docenti`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} docenti`;
  // }

  // update(id: number, updateDocentiDto: UpdateDocentiDto) {
  //   return `This action updates a #${id} docenti`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} docenti`;
  // }
}
