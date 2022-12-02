import { DialogModule } from './components/dialog/dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { ClienteModule } from './components/cliente/cliente.module';
import { FooterModule } from './components/footer/footer.module';
import { NavModule } from './components/nav/nav.module';
import { EspecialistaComponent } from './components/especialista/especialista.component';

@NgModule({
  declarations: [
    AppComponent,
    EspecialistaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClienteModule,
    NavModule,
    FooterModule,
    DialogModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressAnimation: 'increasing',
      progressBar: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
