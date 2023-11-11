import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DatiService } from '../dati.service';
import { UserService } from '../servizi/users.service';
import { UsersModels } from '../modelli/users/users.models';



@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})

export class UtenteComponent {
  name = "";
  eta= 0;
  denaro=0;



  users: Utente[]=[];
  title: any;

  lista=["cavolo","funghi","insalata"];

  

  
  constructor(private dialog:MatDialog, private dati:DatiService, private UserService: UserService)
  {}
  ngOnInit(): void {this.caricaUtenti();}


  salvaUtenti() {
    if (
      this.name != "" &&
      this.eta > 0 &&
      this.eta < 130 &&
      this.denaro >= 1
    )

    {
      // Esegui i controlli locali e crea un nuovo utente
      const nuovoUtente: UsersModels = {
        id: 0, // Assicurati di impostare l'id in modo appropriato
        nome: this.name,
        age: this.eta,
        wallet: this.denaro,
      };

      // Chiamata a PostUtenti per inviare l'utente al backend
      this.UserService.PostUtenti(nuovoUtente)
        .then((risposta) => {
          // Gestisci la risposta dal backend qui
          console.log('Utente inviato con successo:', risposta);

          // Aggiungi l'utente alla lista locale solo se la chiamata al backend ha successo
          this.users.push(nuovoUtente);
        })

        .catch((errore) => {
          // Gestisci eventuali errori qui
          console.error("Errore durante l'invio dell'utente:", errore);
          this.dialog.open(MyDialogComponent);
        });
    } 
    else
    {
      this.dialog.open(MyDialogComponent);
    }
  }

   caricaUtenti() {
    this.UserService.GetUtenti().then((utenti: any) => {
      console.log('Utenti recuperati:', utenti);
      this.users.push(utenti);
      this.users = utenti;
    });
  }

   mandaUtente()
   {
    this.dati.setUtenti (this.users)
   }

   elimina(i: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { indexToDelete: i },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'delete') {
        const userIdToDelete = this.users[i].id; // Assicurati che l'utente abbia un campo "id"
        
        this.UserService.deleteUtenti(userIdToDelete)
          .then(() => {
            // Rimuovi l'utente dall'array locale
            this.users.splice(i, 1);
            console.log('Utente eliminato con successo');
          })
          .catch((error) => {
            // Gestisci eventuali errori durante l'eliminazione
            console.error('Errore durante l\'eliminazione dell\'utente:', error);
          });
      } else {
        console.log('Operazione annullata');
      }
    });
  }

  update(i: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { indexToEdit: i },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'modifica') {
        // Ottenere l'ID dell'utente che si desidera aggiornare
        const userIdToUpdate = this.users[i].id; // Assicurati che l'utente abbia un campo "id"

        // Creare un oggetto utente con i dati da aggiornare
        const updatedUser: UsersModels = {
          id: userIdToUpdate,
          nome: this.name,
          age: this.eta,
          wallet: this.denaro,
        };

        // Controlli sulla validità dei dati
        if (
          updatedUser.nome !== '' &&
          updatedUser.age > 0 &&
          updatedUser.age < 130 &&
          updatedUser.wallet >= 1
        ) {
          // Chiamare la funzione di aggiornamento del servizio solo se i dati sono validi
          this.UserService
            .UpdateUtenti(userIdToUpdate, updatedUser)
            .then(() => {
              // Aggiornare l'utente nell'array locale solo se l'aggiornamento nel backend ha successo
              this.users[i] = updatedUser;
              console.log('Utente aggiornato con successo');
            })
            .catch((error) => {
              // Gestisci eventuali errori durante l'aggiornamento nel backend
              console.error(
                'Errore durante l\'aggiornamento dell\'utente:',
                error
              );
              this.dialog.open(MyDialogComponent);
            });
        } else {
          // Se i dati non sono validi, mostra la tua dialog con il messaggio di errore incorporato
          this.dialog.open(MyDialogComponent);
        }
      }
    });
  }
   }
  
  
class Utente {
  nome: string;
  age: number;
  wallet: number;
  id!: number;

  constructor(nome: string, age: number, wallet: number) {
    
    this.nome = nome;
    this.age = age;
    this.wallet= wallet;
  }
}
