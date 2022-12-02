import { EditarEspecialistaComponent } from './components/especialista/editar-especialista/editar-especialista.component';
import { CriarEspecialistaComponent } from './components/especialista/criar-especialista/criar-especialista.component';
import { EspecialistaComponent } from './components/especialista/especialista.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { CriarClienteComponent } from './components/cliente/criar-cliente/criar-cliente.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/cliente/clientes/clientes.component';

const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children: [
      {
        path: 'clientes',
        component:ClientesComponent
      },
      {
        path:'clientes/cadastrar',
        component:CriarClienteComponent
      },
      {
        path:'cliente/:id',
        component:EditarClienteComponent
      },
      {
        path: 'especialistas',
        component:EspecialistaComponent
      },
      {
        path:'especiaslitas/cadastrar',
        component:CriarEspecialistaComponent
      },
      {
        path:'especialista/:id',
        component:EditarEspecialistaComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
