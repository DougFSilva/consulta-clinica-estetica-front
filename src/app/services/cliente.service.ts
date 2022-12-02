import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from 'src/app/models/pessoa/cliente/Cliente';
import { DadosCriarCliente } from 'src/app/models/pessoa/cliente/DadosCriarCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public cadastrar(dados: DadosCriarCliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${environment.URL}/cliente`, dados);
  }

  public deletar(id: number){
    return this.http.delete(`${environment.URL}/cliente/${id}`)
  }

  public editar(cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${environment.URL}/cliente`, cliente)
  }

  public buscar(id: number):Observable<Cliente>{
    return this.http.get<Cliente>(`${environment.URL}/cliente/${id}`)
  }

  public buscarClientes(quantidade: number, pagina: number):Observable<any>{
    return this.http.get<any>(`${environment.URL}/cliente?size=${quantidade}&page=${pagina}&sort=nome`)
  }
}
