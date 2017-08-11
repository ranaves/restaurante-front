import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule}   from '@angular/router';

import { PratosListaComponent} from './pratos-lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    PratosListaComponent
  ],
  exports: [
    PratosListaComponent
  ],
  providers:[]
})
export class PratosModule { }
