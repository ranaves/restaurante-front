import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule}   from '@angular/router';

import { PratosListaComponent} from './pratos-lista.component';
import { PratoDetalheComponent } from './prato-detalhe.component';

import { PratoService } from './shared/prato.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    PratosListaComponent,
    PratoDetalheComponent
  ],
  exports: [
    PratosListaComponent
  ],
  providers:[ PratoService ]
})
export class PratosModule { }
