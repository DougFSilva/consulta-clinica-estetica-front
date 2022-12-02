import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';

import { DadosCriarCliente } from 'src/app/models/pessoa/cliente/DadosCriarCliente';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  dadosCriarCliente: DadosCriarCliente = {
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: ""
  }
  constructor(
    private service: ClienteService,
    private toast: ToastrService,
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  public cadastrar(): void{
    let dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed().subscribe(response => {
      if(response == 'true'){
        this.service.cadastrar(this.dadosCriarCliente).subscribe(response => {
          this.toast.success('Cliente cadastrado com sucesso!', 'SUCESSO');
          this.router.navigate(['/clientes']);
        })
      }
    }, (ex) => {
      this.toast.error(ex.error.error, 'ERROR');
      this.router.navigate(['/clientes']);
    })
  }

}
