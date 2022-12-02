import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { ClientesComponent } from './clientes/clientes.component';
import { CriarClienteComponent } from './criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [CriarClienteComponent, ClientesComponent, EditarClienteComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    CriarClienteComponent, ClientesComponent, EditarClienteComponent
  ]
})
export class ClienteModule { }
