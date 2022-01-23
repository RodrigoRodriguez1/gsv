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

  apiUrl = 'https://gsvapparel.com/api'
  // apiUrl = 'http://localhost:3000'

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

  public getProduto(id: number): any {
    return this.http.get(this.apiUrl + `/products/${id}`)
  }
  public getProdutoImage(id: number, imagem: number): any {
    return this.http.get(this.apiUrl + `/products/produtoImage${imagem}/${id}`)
  }
  
  public getPropriedadesProduto(id) {
    return this.http.get(this.apiUrl + `/products/propriedadesProduto/${id}`)
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

  public createPedidoDetalhado(pedidos, dadosUser) {
    let dados = {
      'pedidos': pedidos,
      'dadosUser': dadosUser
    }
    return this.http.post(`${this.apiUrl}/pedidos/createPedidoDet`, dados)
  }
  /* PAGAMENTOS */

  pagamento(email: string, senha: string): Observable<any> {
    return this.http.post(this.apiUrl + '/pagamentos/create_preference', email)
  }

  /* Pegando o valor do frete (carrinho) */

  getFreteSEDEX() {
    // Pegando o cep do usuario:
    let dadosUsuario = JSON.parse(localStorage.getItem('currentUser'))

    return this.http.get(this.apiUrl + '/pagamentos/getValorFreteSEDEX/' + dadosUsuario.cep)
  }

  getFretePAC() {
    // Pegando o cep do usuario:
    let dadosUsuario = JSON.parse(localStorage.getItem('currentUser'))

    return this.http.get(this.apiUrl + '/pagamentos/getValorFretePAC/' + dadosUsuario.cep)
  }

  // ##########################################################################################
  // ##########################################################################################
  // ##########################################################################################
  /* Pegando o valor do frete (produto detalhado) */

  getFreteSEDEXProduct(cep) {

    return this.http.get(this.apiUrl + '/pagamentos/getValorFreteSEDEX/' + cep)
  }

  getFretePACProduct(cep) {

    return this.http.get(this.apiUrl + '/pagamentos/getValorFretePAC/' + cep)
  }

}
