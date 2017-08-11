import { Injectable } from '@angular/core';
import { Restaurante } from './restaurante'

import { Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestauranteService {

  private restaurantesUrl: string = 'http://192.168.0.18:3000/api/restaurantes';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
    
  constructor(private http: Http) {}

  findAll(): Promise<Restaurante[]> {      
      return this.http.get(this.restaurantesUrl)
          .toPromise()
          .then(response => response.json() as Restaurante[])
          .catch(this.handleError);        
  }

  find(id: number): Promise<Restaurante> {
        return this.findAll()
            .then((restaurantes: Restaurante[]) => restaurantes.find(contato => contato.id == id));
  }

  create(restaurante: Restaurante): Promise<Restaurante> {
    return this.http
        .post(this.restaurantesUrl, JSON.stringify(restaurante), {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json() as Restaurante)
        .catch(this.handleError);
        
  }

  update(restaurante: Restaurante): Promise<Restaurante> {
    const url = `${this.restaurantesUrl}/${restaurante.id}`;
    return this.http
        .put(url, JSON.stringify(restaurante), {headers: this.headers})
        .toPromise()
        .then(() => restaurante as Restaurante)
        .catch(this.handleError);
  }

  private handleError(err: any): Promise<any> {
      console.log('Error: ', err);
      return Promise.reject(err.message || err);
  }

}
