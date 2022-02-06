import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PedidosService {

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "multipart/form-data"
  })

  // apiUrl = 'http://localhost:3000'
  apiUrl = 'https://gsvapparel.com/api'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  public getPedidosCliente(id) {
    return this.http.get(`${this.apiUrl}/pedidos/pedidosCliente/${id}`)
  }

  public pedidoDetalhadoAreaCliente(idPedido) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    return this.http.get(`${this.apiUrl}/pedidos/pedidoDetalhadoAreaCliente/${idPedido}/${currentUser.id_usuario}`)
  }

}
