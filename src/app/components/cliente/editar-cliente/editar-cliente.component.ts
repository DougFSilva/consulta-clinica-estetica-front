import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/pessoa/cliente/Cliente';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente = {
    id: null,
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
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute

  ){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarCliente(id);
  }

  public buscarCliente(id: number):void {
    this.service.buscar(id).subscribe(response => {
      this.cliente = response
    }, (ex) => this.toast.error(ex.error.error))
  }

  public editar(): void {
    let dialog = this.dialog.open(DialogComponent)
    dialog.afterClosed().subscribe(response => {
      if(response == 'true'){
        this.service.editar(this.cliente).subscribe(response => {
          this.toast.success('Cliente editado com sucesso!', 'SUCESSO');
          this.router.navigate(['/clientes']);
        }, (ex) => {
          this.toast.error(ex.error.error, 'ERRO');
          this.router.navigate(['/clientes']);
        })
      }
    })

  }

}
