import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtenteComponent } from './utente/utente.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NegozioComponent } from './negozio/negozio.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DialogConfig } from '@angular/cdk/dialog';


@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    NegozioComponent,
    MyDialogComponent,
    DeleteDialogComponent,
    EditDialogComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule, 
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [ { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } as MatDialogConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
