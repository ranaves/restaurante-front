import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Prato } from './shared/prato';
import { Restaurante } from '../restaurantes/shared/restaurante';

import { PratoService } from './shared/prato.service';
import { RestauranteService } from '../restaurantes/shared/restaurante.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'pratos-lista',
  templateUrl: './pratos-lista.component.html',
  styleUrls: ['./pratos-lista.component.css']
})
export class PratosListaComponent implements OnInit {

  pratos: Prato[] = [];
  restaurantes: Restaurante[] = [];
  mensagem: {};
  classesCss: {};
  private currentTimeout: any;  
  
  constructor(
    private pratoService: PratoService,
    private restauranteService: RestauranteService,
    private dialogService: DialogService    
  ) {}

  ngOnInit(): void {          
    this.pratoService.findAll()
        .then((pratos: Prato[]) => {
            this.pratos = pratos;                    
        }).catch(err =>  {
            console.log(err);
        }); 
    this.restauranteService.findAll()
        .then((restaurantes: Restaurante[]) => {
            this.restaurantes = restaurantes;              
        }).catch(err =>  {
            console.log(err);
        });       
  } 

  onDelete(prato: Prato): void {    
    this.dialogService.confirm('Deseja deletar o prato ' + prato.Nome + '?')
        .then((canDelete: boolean) => {
            if (canDelete) {
              this.pratoService
                  .delete(prato)
                  .then(() => {
                      this.pratos = this.pratos.filter((r: Prato) => r.Id != prato.Id);
                      
                      this.mostrarMensagem({
                          tipo: 'success',
                          texto: 'Prato deletado.'
                      });

                  }).catch(err => {
                      console.log(err);
                        this.mostrarMensagem({
                          tipo: 'danger',
                          texto: 'Ocorreu um erro ao deletar o prato.'
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

}
