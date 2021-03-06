import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Restaurante } from './shared/restaurante';

import { RestauranteService } from './shared/restaurante.service';
import { DialogService } from '../dialog.service';

@Component({  
  selector: 'restaurantes-lista',
  templateUrl: './restaurantes-lista.component.html',
  styleUrls: ['./restaurantes-lista.component.css'],
})
export class RestaurantesListaComponent implements OnInit {
  
  public restaurantes: Restaurante[] = [];
  mensagem: {};
  classesCss: {};  
  private currentTimeout: any;  
  restaurantesLista: Observable<Restaurante[]>;
  public isListaCompleta: boolean;

  constructor(
    private restauranteService: RestauranteService,
    private dialogService: DialogService  
  ) {}

  ngOnInit(): void {
    this.restauranteService.findAll()
        .then((restaurantes: Restaurante[]) => {
            this.restaurantes = restaurantes;             
        }).catch(err =>  {
            console.log(err);
    });        
    this.isListaCompleta = true;     
  } 

  onDelete(restaurante: Restaurante): void {    
    this.dialogService.confirm('Deseja deletar o restaurante ' + restaurante.Nome + '?')
        .then((canDelete: boolean) => {
            if (canDelete) {
              this.restauranteService
                  .delete(restaurante)
                  .then(() => {
                      this.restaurantes = this.restaurantes.filter((r: Restaurante) => r.Id != restaurante.Id);
                      
                      this.mostrarMensagem({
                          tipo: 'success',
                          texto: 'Restaurante deletado.'
                      });

                  }).catch(err => {
                      console.log(err);
                        this.mostrarMensagem({
                          tipo: 'danger',
                          texto: 'Ocorreu um erro ao deletar o restaurante.'
                      });
                  });
            }
        });
  }
  
  private mostrarMensagem(mensagem: {tipo: string, texto: string}): void {
    this.mensagem = mensagem;
    this.montarClasses(mensagem.tipo);
    if (mensagem.tipo != 'danger') {

        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }

        this.currentTimeout = setTimeout(() => {
            this.mensagem = undefined;

        },3000);
    }        
  }

  private montarClasses(tipo: string): void {
    this.classesCss = {
        'alert': true
    };
    this.classesCss['alert-' + tipo] = true;
  }   

  getSearch(term: string): void {
    this.restauranteService.search(term)
    .then((restaurantes: Restaurante[]) => {
        this.restaurantes = restaurantes;                  
    }).catch(err =>  {
        console.log(err);
    }); 
    this.isListaCompleta = false; 
  }

  onEnter(term: string): void {     
     if (term =='' && !this.isListaCompleta)  {
        this.ngOnInit();      
     }
  }

  testeForm(c): void {
      console.log(c);
  }

}
