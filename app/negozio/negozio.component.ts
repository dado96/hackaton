import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DatiService } from '../dati.service';
import { NegozioService } from '../servizi/negozio.service';
import { NegozioModels } from '../modelli/negozio/negozio.models';



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

  constructor(private dialog: MatDialog, private dati: DatiService, private NegozioService: NegozioService){}
  ngOnInit(): void {this.caricaNegozi();}


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
        const nuovoNegozio: NegozioModels={
          id:0,
          nomeNegozio: this.nomeNegozio,
          citta: this.citta,
          indirizzo: this.indirizzo,
          orarioApertura: this.orarioApertura,
          orarioChiusura: this.orarioChiusura,
        };

        this.NegozioService.PostNegozio (nuovoNegozio)
          .then((risposta) =>
          {
            console.log("Negozio inviato con successo: ", risposta);
            this.negozi.push(nuovoNegozio);
          })

          .catch ((errore)=>
          {
            console.error("Errore durante l'invio del negozio:", errore)
            this.dialog.open(MyDialogComponent);
          })
      }
      else
      {
        this.dialog.open(MyDialogComponent);   
      }

      console.log("hai premuto salva");
   }

   caricaNegozi() {
    this.NegozioService.GetNegozi().then((negozi: any) => {
      console.log('Negozi recuperati:', negozi);
      this.negozi.push(negozi);
      this.negozi = negozi;
    });
  }

   mandaNegozi()
   {
    this.dati.setNegozi (this.negozi)
   }

   eliminaNegozio(i: number)
   {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { indexToDelete: i },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'delete') {
        const negozioIdToDelete = this.negozi[i].id; // Assicurati che l'utente abbia un campo "id"
        
        this.NegozioService.deleteNegozio(negozioIdToDelete)
          .then(() => {
            // Rimuovi l'utente dall'array locale
            this.negozi.splice(i, 1);
            console.log('Negozio eliminato con successo');
          })
          .catch((error) => {
            // Gestisci eventuali errori durante l'eliminazione
            console.error('Errore durante l\'eliminazione del\'negozio:', error);
          });
      } else {
        console.log('Operazione annullata');
      }
    });
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
            const NegozioIdToUpdate = this.negozi[i].id;
            const updateNegozio: NegozioModels=
            {
              id: NegozioIdToUpdate,
              nomeNegozio: this.nomeNegozio,
              citta: this.citta,
              indirizzo: this.indirizzo,
              orarioApertura:this.orarioApertura,
              orarioChiusura:this.orarioChiusura,
            };

            if(
                updateNegozio.nomeNegozio !="" &&
                updateNegozio.citta != "" &&
                updateNegozio.indirizzo!= "" &&
                updateNegozio.orarioApertura>=1 &&
                updateNegozio.orarioApertura<=24 &&
                updateNegozio.orarioChiusura>=1 &&
                updateNegozio.orarioChiusura<=24
              )
              {
                this.NegozioService
                .UpdateNegozi(NegozioIdToUpdate, updateNegozio)
                .then (()=>
                {
                  this.negozi[i]= updateNegozio;
                  console.log('Negozio aggiornato con successo');
                })
                .catch((error) => {
                  // Gestisci eventuali errori durante l'aggiornamento nel backend
                  console.error('Errore durante l\'aggiornamento del Negozio:', error);
                  this.dialog.open(MyDialogComponent);
                });
              }
              else
              {
                this.dialog.open(MyDialogComponent);
              }
          }
        })

        console.log("record modificato");
   }
}


class Negozio {
  nomeNegozio: string;
  citta: string
  indirizzo: string;
  orarioApertura: number;
  orarioChiusura: number;
  id!: number;

  constructor
  ( nomeNegozio: string,
    citta: string,
    indirizzo: string,
    orarioApertura: number,
    orarioChiusura: number,
    ) 
    {
    this.nomeNegozio = nomeNegozio;
    this.citta = citta;
    this.indirizzo = indirizzo;
    this.orarioApertura = orarioApertura;
    this.orarioChiusura = orarioChiusura;
  }

}
