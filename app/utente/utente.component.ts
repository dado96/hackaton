import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';



@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})

export class UtenteComponent {
  name = "";
  eta= 0;
  denaro=0;
  listaProdotti: string []=[];
  QPP: number []=[1,1,1];  //quantita per prodotto


  users: Utente[]=[];
  title: any;

  lista=["cavolo","funghi","insalata"];

  
  constructor(private dialog:MatDialog){}

    salva(){
    if (
          this.name!= "" && 
          this.eta>0 && 
          this.eta<130 && 
          this.denaro>=1 && 
          this.listaProdotti.length>0 &&
          this.QPP.every((quantita) => quantita > 0)
          
        )
    {
      this.users.push(new Utente(this.name, this.eta, this.denaro, this.listaProdotti, this.QPP));
    console.log("ho premuto salva");
    }
    else
    {
      this.dialog.open(MyDialogComponent);
    }
   }

   elimina(i: number)
   {
    const dialogRef = this.dialog.open(DeleteDialogComponent,
    {
      data: { indexToDelete: i }
    });

    dialogRef.afterClosed().subscribe( result =>
      {
        if(result === 'delete')
        {
          this.users.splice(i,1);
          console.log("utente cancellato");
        }
        else
        {
          console.log("operazione annullata");
        }
      })
   }

   update(i:number)
   {
    const dialogRef = this.dialog.open(EditDialogComponent,
      {
        data: { indexToEdit: i }
      });

      dialogRef.afterClosed().subscribe( result =>
        {
          if(result === 'modifica')
          {
            if(
                this.name!= "" && 
                this.eta>0 && 
                this.eta<130 && 
                this.denaro>=1)
            {
              this.users[i].nome= this.name;
              this.users[i].eta= this.eta;            
              this.users[i].denaro= this.denaro;
            }
            
            else
            {
              this.dialog.open(MyDialogComponent);
            }
          }
        });
   }

   updateLista(i: number)
   {
    const dialogRef = this.dialog.open(EditDialogComponent,
      {
        data: { indexToEdit: i }
      });

    dialogRef.afterClosed().subscribe( result =>
    {
      if(result === 'modifica')
      {
        if (this.listaProdotti.length > 0 && this.QPP.every(quantita => quantita > 0))
        {
          this.users[i].prodotti= this.listaProdotti;
          console.log("lista spesa modificata");
        }
        else
        {
          this.dialog.open(MyDialogComponent);
        }
      }
    })
   }

   }
  
  
class Utente {
  nome: string;
  eta: number;
  denaro: number;
  prodotti: string []=[];
  quantita: number []=[];

  constructor(nome: string, eta: number, denaro: number, prodotti: string[], quantita: number[]) {
    
    this.nome = nome;
    this.eta = eta;
    this.denaro= denaro;
    this.prodotti= prodotti
    this.quantita= quantita
  }
}
