import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersModels } from 'src/app/modelli/users/users.models';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:3002';

    constructor(private httpClient: HttpClient) { }


    async GetUtenti(): Promise<UsersModels[]> {
        return new Promise(  (resolve, reject)=> {
            const requestUrl = `${this.apiUrl}/users`;

                const response: any = this.httpClient.get(requestUrl).subscribe({
                    next: (response: any) => { resolve(response); },
                    error: (error) =>{ 
                        console.error('ApiService.httpGet() error', response);
                        reject(error);
                    throw new Error('Errore nella richiesta API');
                }
                });

                
        });

   

        // Prepare headers
        // let headers = new HttpHeaders();
        // headers = headers
        //     .set('Accept', 'application/json')
        //     .set('Content-Type', 'application/json');

        // const httpOptions = {
        //     headers
        // };
       
    }


    async PostUtenti(user: UsersModels) : Promise<UsersModels>
    {
        const requestUrl = `${this.apiUrl}/users`;

    return new Promise<UsersModels>((resolve, reject) => {
      const response: any = this.httpClient.post<UsersModels>(requestUrl, user).subscribe
      ({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            console.error('UserService.CreateUser() error', error);
            reject(error);
          },
        });
    });
  }

    async deleteUtenti(id: number): Promise <void>
    {
      const requestUrl = `${this.apiUrl}/users/${id}`;

      return new Promise<void> ((resolve, reject)=>
      {
        const response: any = this.httpClient.delete<UsersModels> (requestUrl).subscribe
        ({
          next:()=> {
            resolve();
          },
          error: (error)=> {
            reject(error)
          },
        });
      });
    }


    async UpdateUtenti(id: number, user: UsersModels): Promise<void>
    {
      const requestUrl =  `${this.apiUrl}/users/${id}`;
      return new Promise<void> ((resolve, reject)=>
      {
        const response: any = this.httpClient.patch<UsersModels> (requestUrl, user).subscribe
        ({
            next:()=> {
              resolve();
            },
            error: (error)=> {
              reject(error)
            },
        });
      });
    }

}