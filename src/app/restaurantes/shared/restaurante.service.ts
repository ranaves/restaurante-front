import { Injectable } from '@angular/core';
import { Restaurante } from './restaurante'

import { Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable()
export class RestauranteService {

  //private restaurantesUrl: string = 'http://192.168.0.20:3000/api/restaurantes';
  private restaurantesUrl: string = 'http://app-restaurante.apphb.com//api/restaurantes';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
    
  constructor(private http: Http) {}

  findAll(): Promise<Restaurante[]> {      
    return this.http.get(this.restaurantesUrl)
        .toPromise()
        .then(response => response.json() as Restaurante[])
        .catch(this.handleError);        
  }

  find(id: number){    
    return this.findAll()
        .then((restaurantes: Restaurante[]) => restaurantes.find(restaurante => restaurante.Id == id));
  }

  create(restaurante: Restaurante): Promise<Restaurante> {
    return this.http
        .post(this.restaurantesUrl, JSON.stringify(restaurante), {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json() as Restaurante)
        .catch(this.handleError);
  }

  update(restaurante: Restaurante): Promise<Restaurante> {
    const url = `${this.restaurantesUrl}/${restaurante.Id}`;
    return this.http
        .put(url, JSON.stringify(restaurante), {headers: this.headers})
        .toPromise()
        .then(() => restaurante as Restaurante)
        .catch(this.handleError);
  }

  delete(restaurante: Restaurante): Promise<Restaurante> {      
    const url = `${this.restaurantesUrl}/${restaurante.Id}`;    
    return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then(() => restaurante as Restaurante)
        .catch(this.handleError);
  }

  search(term: string): Promise<Restaurante[]> {   
    return this.http.get(`${this.restaurantesUrl}/?nome=${term}`)
      .toPromise()
      .then(response => response.json() as Restaurante[])
      .catch(this.handleError);  

    //.map((res: Response) => res.json().data as Restaurante[]);
  }

  private handleError(err: any): Promise<any> {
      console.log('Error: ', err);
      return Promise.reject(err.message || err);
  }

}
