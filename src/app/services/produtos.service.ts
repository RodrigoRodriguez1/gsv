import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "multipart/form-data"
  })

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  public getProdutos() {
    return this.http.get(`${this.apiUrl}/products/produtosVestuario`)
  }

  public getProdutosTenis() {
    return this.http.get(`${this.apiUrl}/products/produtosTenis`)
  }

  public getProdutosUsados() {
    return this.http.get(`${this.apiUrl}/products/produtosUsados`)
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  showMessage(msg: string, isErro: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isErro ? ['msg-erro'] : ['msg-success']
    })
  }

  /* GERANDO O PEDIDO */
  public createPedido(pedidos) {
    return this.http.post(`${this.apiUrl}/pedidos/createPedido`, pedidos)
  }

  public createPedidoDetalhado(pedidos) {
    return this.http.post(`${this.apiUrl}/pedidos/createPedidoDet`, pedidos)
  }
  /* PAGAMENTOS */

  pagamento(email: string, senha: string): Observable<any> {
    debugger
    return this.http.post(this.apiUrl + '/pagamentos/create_preference', email)
  }

}
