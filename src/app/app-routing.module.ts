import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantesListaComponent } from './restaurantes/restaurantes-lista.component';
import { PratosListaComponent } from './pratos/pratos-lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'restaurantes', component: RestaurantesListaComponent },  
  { path: 'pratos', component: PratosListaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
