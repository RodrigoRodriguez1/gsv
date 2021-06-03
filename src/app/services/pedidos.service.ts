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

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  public getPedidosCliente(id) {
    return this.http.get(`${this.apiUrl}/pedidos/pedidosCliente/${id}`)
  }

}
