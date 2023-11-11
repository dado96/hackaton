import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService 
{
   utenti: any[] = [];
   negozi: any[] = [];

  constructor() { }

  setUtenti (utenti: any)
  {
    this.utenti= utenti; 
  }

  setNegozi (negozi: any)
  {
    this.negozi= negozi;  
  }

  
}
