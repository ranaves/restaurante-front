import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import { Prato } from './shared/prato';
import { Restaurante } from '../restaurantes/shared/restaurante';
import { PratoService } from './shared/prato.service';
import { RestauranteService } from '../restaurantes/shared/restaurante.service';

@Component({
  selector: 'prato-detalhe',
  templateUrl: './prato-detalhe.component.html',
  styleUrls: ['./prato-detalhe.component.css']
})
export class PratoDetalheComponent implements OnInit {

  prato: Prato;
  restaurantes: Restaurante[] = [];
  private isNew: boolean = true;
  titulo: string = "Cadastro de Prato";

  constructor(
    private pratoService: PratoService,
    private restauranteService: RestauranteService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.prato = new Prato('',0.0,0);

    this.restauranteService.findAll()
    .then((restaurantes: Restaurante[]) => {
        this.restaurantes = restaurantes;   
        console.log(this.restaurantes);                 
    }).catch(err =>  {
        console.log(err);
    }); 
    
    this.route.params.forEach((params: Params) => {
        let id: number = +params['id'];
        
        if (id) {
            this.isNew = false;   
            this.titulo = "Edição de Prato";             
            this.pratoService.find(id)
            .then((prato: Prato) => {
                this.prato = prato;        
            }) 
        }                       
    });
  }

  onSubmit(): void {
    let promise;
   
    if (this.isNew) {
        promise = this.pratoService.create(this.prato);
    } else {
        promise = this.pratoService.update(this.prato);        
    }
    promise.then(prato => this.goBack());
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
        'form-group': true,
        'has-danger': !isValid && !isPristine,
        'has-success': isValid && !isPristine
    };
  }

  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
        'form-control': true,
        'form-control-danger': !isValid && !isPristine,
        'form-control-success': isValid && !isPristine
    };
  }

  goBack(): void {
    this.location.back();
  }

}
