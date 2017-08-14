import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import { Restaurante } from './shared/restaurante';
import { RestauranteService } from './shared/restaurante.service';

@Component({
  selector: 'restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html',
  styleUrls: ['./restaurante-detalhe.component.css']
})
export class RestauranteDetalheComponent implements OnInit {

  restaurante: Restaurante;
  private isNew: boolean = true;
  titulo: string = "Cadastro de Restaurante";

  constructor(
    private restauranteService: RestauranteService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.restaurante = new Restaurante('');
    
    this.route.params.forEach((params: Params) => {
        let id: number = +params['id'];
        
        if (id) {
            this.isNew = false;   
            this.titulo = "Edição de Restaurante";             
            this.restauranteService.find(id)
            .then((restaurante: Restaurante) => {
                this.restaurante = restaurante;        
            }) 
        }                       
    });
  }

  onSubmit(): void {
    let promise;
   
    if (this.isNew) {
        promise = this.restauranteService.create(this.restaurante);  
        console.log(this.restaurante);       
    } else {
        promise = this.restauranteService.update(this.restaurante);        
    }
    promise.then(restaurante => this.goBack());
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
