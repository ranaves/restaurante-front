import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantesListaComponent } from './restaurantes/restaurantes-lista.component';
import { PratosListaComponent } from './pratos/pratos-lista.component';
import { RestauranteDetalheComponent } from './restaurantes/restaurante-detalhe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesListaComponent },
  { path: 'pratos', component: PratosListaComponent },
  { path: 'restaurante/save', component: RestauranteDetalheComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
