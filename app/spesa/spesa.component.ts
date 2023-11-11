import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-spesa',
  templateUrl: './spesa.component.html',
  styleUrls: ['./spesa.component.css']
})


export class SpesaComponent implements OnInit
{
  constructor (private dialog: MatDialog, private datiService: DatiService)
  {}

  utenti: any[]=[];
  negozi: any[]=[];

  ngOnInit()
  {
    
    if(this.utenti.length==0 || this.negozi.length==0)
    {
      this.dialog.open(MyDialogComponent);
    }
    console.log (this.utenti);
    console.log (this.negozi);
    this.confrontoUtentiNegozio();
  }

  confrontoUtentiNegozio()
  {
    this.utenti.forEach(x => 
      {
        this.negozi.forEach(y => 
          {
            if (this.negozi[x] === this.utenti[y])
            {

            }
          });
      });
  }
}
