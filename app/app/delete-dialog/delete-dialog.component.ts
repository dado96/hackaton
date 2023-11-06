import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { UtenteComponent } from '../utente/utente.component';

@Component({
  selector: 'app-delete-dialog',
  template: `<h1 mat-dialog-title style="display: flex; justify-content: center;">ATTENZIONE!</h1>
  <div mat-dialog-content> sicuro di voler eliminare l'elemento?</div>
  <div mat-dialog-actions style="display: flex; justify-content: center; margin: 0 auto;">
    <button mat-button mat-dialog-close="">Chiudi</button>
    <button mat-button [mat-dialog-close]="'delete'">Si</button>
  </div>`,
  
})
export class DeleteDialogComponent
{
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) {}

  closeDialog(confirm: boolean)
  {
    this.dialogRef.close(confirm);
  }
} 

