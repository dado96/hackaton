import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEsamiDto } from './dto/create-esami.dto';
import { UpdateEsamiDto } from './dto/update-esami.dto';
import { User } from 'src/users/entities/user.entity';
import { Corsi } from 'src/corsi/entities/corsi.entity';
import { Docenti } from 'src/docenti/entities/docenti.entity';
import { Classi, ClassiService } from '../classi/classi.service';
import { Esami } from './entities/esami.entity';
import { UsersService } from 'src/users/users.service';
import { promises } from 'dns';
import { NotFoundError } from 'rxjs';



    

@Injectable()
export class EsamiService {
 async createEsame(createEsamiDto: CreateEsamiDto, idAlunno: number)
  {
    const esame= new Esami();
    esame.nomeMateria=createEsamiDto.nomeMateria;
    esame.dataEsame= new Date;

     const alunno= await User.findOne({where: {id:idAlunno}});
      if(!alunno)
      {
        return (`l'utente con ID ${idAlunno} non e' stato trovato`);
      }

      // else if(alunno.prefMateria1 !== esame.nomeMateria && alunno.prefMateria2 !== esame.nomeMateria)
      // {        
      //     return(`l'alunno "${alunno.firstname}"  "${alunno.lastname}" non ha la materia "${createEsamiDto.nomeMateria}" tra le sue preferenze. Le sue preferenze sono "${alunno.prefMateria1}" e "${alunno.prefMateria2}".`);
      // }

      // else if(alunno.prefMateria1 === esame.nomeMateria || alunno.prefMateria2 === esame.nomeMateria)
      // {
      //     esame.idAlunno= idAlunno;
      //     esame.nomeAlunno= alunno.firstname;
      //     esame.cognomeAlunno= alunno.lastname;
      // }
      
    const docente= await Docenti.findOne({ where: {materia: esame.nomeMateria}});
           if(!docente)
          {
            return (`non esiste un professore che insegni la materia "${createEsamiDto.nomeMateria}"  all'interno del DB`);
          }
          else
          {
            esame.nomeDocente= docente.nome;
          }
          
         await esame.save();

          return esame;
  }

  findAll() {
    return `This action returns all esami`;
  }

  async findAllEsami() {
    
    
    return 0;
  }

  findOne(id: number) {
    return `This action returns a #${id} esami`;
  }

  update(id: number, updateEsamiDto: UpdateEsamiDto) {
    return `This action updates a #${id} esami`;
  }

  remove(id: number) {
    return `This action removes a #${id} esami`;
  }
}
