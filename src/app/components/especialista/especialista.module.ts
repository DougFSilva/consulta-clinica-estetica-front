import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { EspecialistasComponent } from './especialistas/especialistas.component';
import { CriarEspecialistaComponent } from './criar-especialista/criar-especialista.component';
import { EditarEspecialistaComponent } from './editar-especialista/editar-especialista.component';

@NgModule({
  declarations: [
    EspecialistasComponent,
    CriarEspecialistaComponent,
    EditarEspecialistaComponent
  ],
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
  ]
})
export class EspecialistaModule { }
