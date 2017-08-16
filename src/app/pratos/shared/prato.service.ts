import { Injectable } from '@angular/core';
import { Prato } from './prato'

import { Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PratoService {

  //private pratosUrl: string = 'http://192.168.0.20:3000/api/pratos';
  private pratosUrl: string = 'http://app-restaurante.apphb.com/api/pratos';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  findAll(): Promise<Prato[]> {      
    return this.http.get(this.pratosUrl)
        .toPromise()
        .then(response => response.json() as Prato[])
        .catch(this.handleError);        
  }

  find(id: number){    
    return this.findAll()
        .then((pratos: Prato[]) => pratos.find(prato => prato.Id == id));
  }

  create(prato: Prato): Promise<Prato> {
    return this.http
        .post(this.pratosUrl, JSON.stringify(prato), {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json() as Prato)
        .catch(this.handleError);
  }

  update(prato: Prato): Promise<Prato> {
    const url = `${this.pratosUrl}/${prato.Id}`;
    return this.http
        .put(url, JSON.stringify(prato), {headers: this.headers})
        .toPromise()
        .then(() => prato as Prato)
        .catch(this.handleError);
  }

  delete(prato: Prato): Promise<Prato> {      
    const url = `${this.pratosUrl}/${prato.Id}`;    
    return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then(() => prato as Prato)
        .catch(this.handleError);
  }  

  private handleError(err: any): Promise<any> {
      console.log('Error: ', err);
      return Promise.reject(err.message || err);
  }

}
