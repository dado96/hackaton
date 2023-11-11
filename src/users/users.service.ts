import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

   create(createUserDto: CreateUserDto) {
    const user= new User();
    user.age=createUserDto.age;
    user.nome=createUserDto.nome;
    user.wallet=createUserDto.wallet;
    return user.save();
  }

  async findAll() {
    console.log("Entrato")
    return  await User.find();
  }

  findOne(id: number) 
  {
    return User.findOne( { where: { id: id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return User.update(id, updateUserDto);
  }

  async remove(id: number) {
    const utente= await User.findOneBy( {  id: id});
    await User.remove(utente);
  }
}