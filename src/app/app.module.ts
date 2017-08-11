import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule}   from '@angular/router';
import { RestaurantesModule }  from './restaurantes/restaurantes.module';
import { PratosModule }  from './pratos/pratos.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    RouterModule,
    RestaurantesModule,
    PratosModule  
  ],
  declarations: [   
    AppComponent,
    HomeComponent
  ],   
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
