import { Injectable } from '@nestjs/common';
import { CreateClassiDto } from './dto/create-classi.dto';
import { UpdateClassiDto } from './dto/update-classi.dto';
import { User } from 'src/users/entities/user.entity';
import { Corsi } from 'src/corsi/entities/corsi.entity';
import { Docenti } from 'src/docenti/entities/docenti.entity';
import { Classi } from './entities/classi.entity';


class Class 
    {
      materie: string[];
      rangeEta: number;
      alunni: User[];
      docenti: Docenti[];
      constructor(materie: string[], rangeEta:number, alunni:User[]=[], docenti:Docenti[]=[])
      {
        this.materie=materie;
        this.rangeEta=rangeEta;
        this.alunni=alunni;
        this.docenti=docenti;
      }
      assegnaAlunni(listaUtenti: User[])
      {
          listaUtenti.forEach(y => 
          {
            if(y.age == this.rangeEta)
            this.alunni.push(y) 
          });
      }
      assegnaDocenti(listaDocenti: Docenti[])
      {
        listaDocenti.forEach(a =>
          {
            this.docenti.push(a)
          });
      }

    }
  
//get classi id utente estrae dati utente da id
// anche per il docente

@Injectable()
export class ClassiService {
  create(createClassiDto: CreateClassiDto) 
  {
    return 'This action adds a new classi';
  }

  findAll() 
  {
    return 'This action showsaì all classi';
  }

  async findAllClassi() 
  {
    const listaUtenti:User[]= await User.find();
    const listaCorsi:Corsi[]= await Corsi.find();
    const listaDocenti:Docenti[]= await Docenti.find();
    const listaMaterie: string[]=[];

    

    listaCorsi.forEach(x => 
      {
        listaMaterie.push(x.nomeCorso)
      });

    const classe1= new Class(listaMaterie, 17);
          classe1.assegnaAlunni(listaUtenti);
          classe1.assegnaDocenti(listaDocenti);

    const classe2= new Class(listaMaterie, 18);
          classe2.assegnaAlunni(listaUtenti);
          classe2.assegnaDocenti(listaDocenti);

    const classe3= new Class(listaMaterie, 19);
          classe3.assegnaAlunni(listaUtenti);
          classe3.assegnaDocenti(listaDocenti);

    const listaClassi: Class[] = [classe1, classe2, classe3];

    return listaClassi;
  }


 async findUtentiById(id: number)
  {
    const listaClassi: Class[] = await this.findAllClassi();
    var tempt: Class; 

    listaClassi.forEach(element => {
      
      element.alunni.forEach(x => 
        {  
        if (x.id == id) {
          tempt = element;
          tempt.alunni.length = 0;
          tempt.alunni.push(x);
          return;
        }
      });
      
    });

    return tempt;
  }

  async findDocentiById(id: number)
  {
    const listaClassi: Class[] = await this.findAllClassi();
    var tempt: Class; 

    listaClassi.forEach(element => {
      
      element.docenti.forEach(x => 
        {  
        if (x.id == id) {
          tempt = element;
          tempt.docenti.length = 0;
          tempt.docenti.push(x);
          return;
        }
      });
      
    });

    return tempt;
  }


  findOne(id: number) {
    return `This action returns a #${id} classi`;
  }

  update(id: number, updateClassiDto: UpdateClassiDto) {
    return `This action updates a #${id} classi`;
  }

  remove(id: number) {
    return `This action removes a #${id} classi`;
  }
}
export { Classi };

