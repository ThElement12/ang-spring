import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

import { Observable, of, throwError } from 'rxjs';
import Swal from 'sweetalert2';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
export class ClienteService {
  private urlEndpPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }
  
  getClientes(): Observable<Cliente[]>{ 
    //return of(CLIENTES); 
    return this.http.get(this.urlEndpPoint).pipe(
      map( (response) => response as Cliente[])
    );
  }
  create(cliente: Cliente): Observable<any>{
    return this.http.post<any>(this.urlEndpPoint, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndpPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes'])
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  update(cliente: Cliente): Observable<any>{
    return this.http.put<any>(`${this.urlEndpPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
