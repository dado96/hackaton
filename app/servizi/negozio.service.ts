import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NegozioModels } from 'src/app/modelli/negozio/negozio.models';

@Injectable({
    providedIn: 'root'
})
export class NegozioService {
    private apiUrl = 'http://localhost:3002';

    constructor(private httpClient: HttpClient) { }


    async GetNegozi(): Promise<NegozioModels[]> {
        return new Promise(  (resolve, reject)=> {
            const requestUrl = `${this.apiUrl}/negozio`;

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

    async PostNegozio(user: NegozioModels) : Promise<NegozioModels>
    {
        const requestUrl = `${this.apiUrl}/negozio`;

    return new Promise<NegozioModels>((resolve, reject) => {
      const response: any = this.httpClient
        .post<NegozioModels>(requestUrl, user)
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            console.error('NegozioService.CreateNegozio() error', error);
            reject(error);
          },
        });
    });
  }

  async deleteNegozio(id: number): Promise <void>
    {
      const requestUrl = `${this.apiUrl}/negozio/${id}`;

      return new Promise<void> ((resolve, reject)=>
      {
        const response: any = this.httpClient.delete<NegozioModels> (requestUrl).subscribe
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


    async UpdateNegozi(id: number, user: NegozioModels): Promise<void>
    {
      const requestUrl =  `${this.apiUrl}/negozio/${id}`;
      return new Promise<void> ((resolve, reject)=>
      {
        const response: any = this.httpClient.patch<NegozioModels> (requestUrl, user).subscribe
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
