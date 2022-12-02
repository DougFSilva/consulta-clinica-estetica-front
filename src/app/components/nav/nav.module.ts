
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { NavComponent } from './nav.component';
import { FooterModule } from '../footer/footer.module';




@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    FooterModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
