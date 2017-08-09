import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantesListaComponent } from './restaurantes/restaurantes-lista.component';
import { PratosListaComponent } from './pratos/pratos-lista.component';

@NgModule({
  declarations: [   
    AppComponent,
    RestaurantesListaComponent,
    PratosListaComponent
    
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
