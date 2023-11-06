import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-my-dialog',
  template: `<h1 mat-dialog-title style="display: flex; justify-content: center;">ERRORE</h1>
  <div mat-dialog-content> i valori inseriti potrebbero non essere corretti. Riprova</div>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close style=" margin: 0 auto; ">Chiudi</button>
  </div>`,
})


export class MyDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(MyCustomDialogComponent);
  }
}


export class MyCustomDialogComponent {}



export class myDialog {}