import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/pessoa/cliente/Cliente';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  ELEMENT_DATA: Cliente[] = [];
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'email', 'estado', 'cidade', 'bairro', 'editar', 'deletar'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  clientesPorPagina: number = 10;
  pagina:number = 0;

  constructor(
    private service: ClienteService,
    private toast: ToastrService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.buscarClientes()
  }

  public buscarClientes():void{
    this.service.buscarClientes(this.clientesPorPagina, this.pagina).subscribe(response => {
      this.dataSource = new MatTableDataSource(response.content)
    }, (ex) => this.toast.error(ex.error.error, "ERRO"))
  }

  public deletar(id: number):void{
    let dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed().subscribe(response => {
      if(response == 'true'){
        this.service.deletar(id).subscribe(response => {
          this.toast.success("Cliente deletado com sucesso!", "SUCESSO");
          this.buscarClientes();
        }, (ex)=> {
          this.toast.error(ex.error.error, "ERRO");
        })
      }
    })


  }

  public incrementaPagina(){
    this.pagina += 1;
    this.buscarClientes()
  }

  public decrementaPagina(){
    if(this.pagina > 0){
      this.pagina -= 1;
      this.buscarClientes()
    }
  }


}
