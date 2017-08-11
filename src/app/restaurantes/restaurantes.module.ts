import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule}   from '@angular/router';

import { RestaurantesListaComponent } from './restaurantes-lista.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe.component';

import { RestauranteService } from './shared/restaurante.service';

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    RouterModule, 
  ],
  declarations: [
    RestaurantesListaComponent,
    RestauranteDetalheComponent
  ],
  exports: [
    RestaurantesListaComponent    
  ],
  providers: [
    RestauranteService
  ],
})
export class RestaurantesModule { }
