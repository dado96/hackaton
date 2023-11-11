import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpesaService } from './spesa.service';
import { CreateSpesaDto } from './dto/create-spesa.dto';
import { UpdateSpesaDto } from './dto/update-spesa.dto';

@Controller('spesa')
export class SpesaController {
  constructor(private readonly spesaService: SpesaService) {}

  @Post()
  create(@Body() createSpesaDto: CreateSpesaDto) {
    return this.spesaService.create(createSpesaDto);
  }

  @Get()
  findAll() {
    return this.spesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spesaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpesaDto: UpdateSpesaDto) {
    return this.spesaService.update(+id, updateSpesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spesaService.remove(+id);
  }
}
