import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtenteComponent } from './utente/utente.component';
import { NegozioComponent } from './negozio/negozio.component';
import { SpesaComponent } from './spesa/spesa.component';

const routes: Routes = [
                          {path: 'utente', component: UtenteComponent},
                          {path: 'negozio', component: NegozioComponent},
                          {path: 'spesa', component: SpesaComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
