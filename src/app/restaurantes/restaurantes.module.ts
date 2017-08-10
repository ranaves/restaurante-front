import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RestaurantesListaComponent } from './restaurantes-lista.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    RestaurantesListaComponent
  ],
  exports: [
    RestaurantesListaComponent
  ]

})
export class RestaurantesModule { }
