import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaProdottiService } from './lista-prodotti.service';
import { CreateListaProdottiDto } from './dto/create-lista-prodotti.dto';
import { UpdateListaProdottiDto } from './dto/update-lista-prodotti.dto';

@Controller('lista-prodotti')
export class ListaProdottiController {
  constructor(private readonly listaProdottiService: ListaProdottiService) {}

  @Post()
  create(@Body() createListaProdottiDto: CreateListaProdottiDto) {
    return this.listaProdottiService.create(createListaProdottiDto);
  }

  @Get()
  findAll() {
    return this.listaProdottiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaProdottiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaProdottiDto: UpdateListaProdottiDto) {
    return this.listaProdottiService.update(+id, updateListaProdottiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaProdottiService.remove(+id);
  }
}
