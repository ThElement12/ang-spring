import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  private urlEndpPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  
  getClientes(): Observable<Cliente[]>{ 
    //return of(CLIENTES); 
    return this.http.get(this.urlEndpPoint).pipe(
      map( (response) => response as Cliente[])
    );
  }
  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpPoint, cliente, {headers: this.httpHeaders});
  }
  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndpPoint}/${id}`);
  }
  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }
  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpPoint}/${id}`, {headers: this.httpHeaders});  
  }
}
