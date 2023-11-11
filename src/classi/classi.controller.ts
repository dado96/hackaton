import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassiService } from './classi.service';
import { CreateClassiDto } from './dto/create-classi.dto';
import { UpdateClassiDto } from './dto/update-classi.dto';







@Controller('classi')
export class ClassiController {
  constructor(private readonly classiService: ClassiService) {}

  @Post()
  create(@Body() createClassiDto: CreateClassiDto) {
    return this.classiService.create(createClassiDto);
  }

  @Get("/trovaUtentiID/:id")
  findUtentiByID(@Param('id') id: number)
  {
    return this.classiService.findUtentiById(id);
  }

  @Get("/trovaDocentiID/:id")
  findDocentiByID(@Param('id') id: number)
  {
    return this.classiService.findDocentiById(id);
  }


  @Get()
  findAll() {
    return this.classiService.findAll();
  }

  @Get("/mostraInfo") //per mostrare tutte le classi
  findAllClassi() {
    return this.classiService.findAllClassi();
  }

  // @Get() //per mostrare il docente
  // {

  // }

  // @Get() //per mostrare l'utente
  // {

  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassiDto: UpdateClassiDto) {
    return this.classiService.update(+id, updateClassiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classiService.remove(+id);
  }
}
