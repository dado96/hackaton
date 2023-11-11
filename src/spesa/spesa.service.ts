import { Injectable } from '@nestjs/common';
import { CreateSpesaDto } from './dto/create-spesa.dto';
import { UpdateSpesaDto } from './dto/update-spesa.dto';

@Injectable()
export class SpesaService {
  create(createSpesaDto: CreateSpesaDto) {
    return 'This action adds a new spesa';
  }

  findAll() {
    return `This action returns all spesa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spesa`;
  }

  update(id: number, updateSpesaDto: UpdateSpesaDto) {
    return `This action updates a #${id} spesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} spesa`;
  }
}
