import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocentiService } from './docenti.service';
import { CreateDocentiDto } from './dto/create-docenti.dto';
import { UpdateDocentiDto } from './dto/update-docenti.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Crud } from '@nestjsx/crud';
import { Docenti } from './entities/docenti.entity';

@Crud({
  model: { type : Docenti},
  params: {
    id: {      
      primary: true,
      field: 'id',
    },
  }
})
@Controller('docenti')
export class DocentiController {
  constructor(public service: DocentiService) {}

  // @Post()
  // create(@Body() createDocentiDto: CreateDocentiDto) {
  //   return this.docentiService.create(createDocentiDto);
  // }

  // @Get()
  // findAll() {
  //   return this.docentiService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.docentiService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDocentiDto: UpdateDocentiDto) {
  //   return this.docentiService.update(+id, updateDocentiDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.docentiService.remove(+id);
  // }
}
