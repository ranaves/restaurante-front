import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantesListaComponent } from './restaurantes/restaurantes-lista.component';
import { PratosListaComponent } from './pratos/pratos-lista.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    RouterModule    
  ],
  declarations: [   
    AppComponent, 
    RestaurantesListaComponent,
    PratosListaComponent,
    HomeComponent    
  ],   
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
