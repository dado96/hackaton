import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DatiService } from '../dati.service';



@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css']
})
export class NegozioComponent
{
  nomeNegozio!: string;
  citta!: string
  indirizzo!: string;
  orarioApertura!: number;
  orarioChiusura!: number;
  prodottiVenduti!: string[];

  

  negozi: Negozio[]=[];

  listaProdotti=["cavolo","funghi","insalata","mele","pere","uva","anguria","melone","kiwi","kaki","fichi d'india"];

  constructor(private dialog: MatDialog, private dati: DatiService){}


  salvaNegozio()
  {
    if(
        this.nomeNegozio!="" &&
        this.citta!="" &&
        this.indirizzo!="" &&
        this.orarioApertura>=1 &&
        this.orarioApertura<=24 &&
        this.orarioChiusura>=1 &&
        this.orarioChiusura<=24
      )

      {
        this.negozi.push(new Negozio
          (
            this.nomeNegozio,
            this.citta,
            this.indirizzo,
            this.orarioApertura,
            this.orarioChiusura,
            this.prodottiVenduti,
            ));
      }

      else
      {
        this.dialog.open(MyDialogComponent);   
      }

      console.log("hai premuto salva");
   }


   mandaNegozi()
   {
    this.dati.setNegozi (this.negozi)
   }

   eliminaNegozio(i: number)
   {
    const dialogRef = this.dialog.open(DeleteDialogComponent,
      {
        data: { indexToDelete: i }
      });

      dialogRef.afterClosed().subscribe( result =>
      {
        if(result === 'delete')
        {
          this.negozi.splice(i,1);
          console.log("Negozio cancellato");
        }
        else
        {
          console.log("operazione annullata");
        }
      })
   }

   updateNegozio(i:number)
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
                this.nomeNegozio !="" &&
                this.citta != "" &&
                this.indirizzo!= "" &&
                this.orarioApertura>=1 &&
                this.orarioApertura<=24 &&
                this.orarioChiusura>=1 &&
                this.orarioChiusura<=24
              )
              {
                this.negozi[i].nomeNegozio= this.nomeNegozio;
                this.negozi[i].citta= this.citta;
                this.negozi[i].indirizzo= this.indirizzo;
                this.negozi[i].orarioApertura= this.orarioApertura;
                this.negozi[i].orarioChiusura= this.orarioChiusura;
              }
              else
              {
                this.dialog.open(MyDialogComponent);
              }
          }
        })

        console.log("record modificato");
   }

   updateProdottiVenduti(i: number)
   {
    const dialogRef = this.dialog.open(EditDialogComponent,
      {
        data: { indexToEdit: i }
      });

      dialogRef.afterClosed().subscribe( result =>
      {
        if(result === 'modifica')
        {
          this.negozi[i].prodottiVenduti= this.prodottiVenduti;
          console.log("lista spesa modificata");
        }
      })
    
   }
}


class Negozio {
  nomeNegozio: string;
  citta: string
  indirizzo: string;
  orarioApertura: number;
  orarioChiusura: number;
  prodottiVenduti: string[];

  constructor
  ( nomeNegozio: string,
    citta: string,
    indirizzo: string,
    orarioApertura: number,
    orarioChiusura: number,
    prodottiVenduti: string[]=[],
    ) 
    {
    this.nomeNegozio = nomeNegozio;
    this.citta = citta;
    this.indirizzo = indirizzo;
    this.orarioApertura = orarioApertura;
    this.orarioChiusura = orarioChiusura;
    this.prodottiVenduti = prodottiVenduti; 
  }

}
