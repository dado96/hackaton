import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorsiService } from './corsi.service';
import { CreateCorsiDto } from './dto/create-corsi.dto';
import { UpdateCorsiDto } from './dto/update-corsi.dto';

@Controller('corsi')
export class CorsiController {
  constructor(private readonly corsiService: CorsiService) {}

  @Post()
  create(@Body() createCorsiDto: CreateCorsiDto) {
    return this.corsiService.create(createCorsiDto);
  }

  @Get()
  findAll() {
    return this.corsiService.findAll();
  }

  @Get("/nome")
  findNomeCorso() 
  {
    return this.corsiService.findNomeCorso();
  }
  @Get("/luogo")
  findLuogo() 
  {
    return this.corsiService.findLuogo();
  }
  @Get("/sommatoria")
  sommatoria() 
  {
    return this.corsiService.sommatoria();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corsiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorsiDto: UpdateCorsiDto) {
    return this.corsiService.update(+id, updateCorsiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corsiService.remove(+id);
  }
}
