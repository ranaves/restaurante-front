import { Component, OnInit } from '@angular/core';
import { RestauranteService } from './shared/restaurante.service';
import { Restaurante } from './shared/restaurante';

@Component({
  selector: 'restaurantes-lista',
  templateUrl: './restaurantes-lista.component.html',
  styleUrls: ['./restaurantes-lista.component.css']
})
export class RestaurantesListaComponent implements OnInit {

  restaurantes: Restaurante[] = []; 

  constructor(
    private restauranteService: RestauranteService
  ) {}

  ngOnInit(): void {
     this.restauranteService.findAll()
        .then((restaurantes: Restaurante[]) => {
            this.restaurantes = restaurantes;            
        }).catch(err =>  {
            console.log(err);
        });          
  }

}
