import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NegozioService } from './negozio.service';
import { CreateNegozioDto } from './dto/create-negozio.dto';
import { UpdateNegozioDto } from './dto/update-negozio.dto';

@Controller('negozio')
export class NegozioController {
  constructor(private readonly negozioService: NegozioService) {}

  @Post()
  create(@Body() createNegozioDto: CreateNegozioDto) {
    return this.negozioService.create(createNegozioDto);
  }

  @Get()
  findAll() {
    return this.negozioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.negozioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNegozioDto: UpdateNegozioDto) {
    return this.negozioService.update(+id, updateNegozioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.negozioService.remove(+id);
  }
}
