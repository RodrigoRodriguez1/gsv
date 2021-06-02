import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Renderer2, Inject } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private ProdutosService: ProdutosService) {}

  usuario

  itemsCarrinho
  finalizandoCompra
  precoSomado = 0
  orderData
  pedidoDetalhado
  idPedidoAtual

  ngOnInit() {

    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });

    this.takeUser()

    this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))

    this.finalizandoCompra = JSON.parse(localStorage.getItem('carrinho'))
    for(var x = 0; this.finalizandoCompra.length > x; x++) {
      this.precoSomado =+ this.finalizandoCompra[x].Preco + this.precoSomado
    }

    localStorage.setItem('somado', this.precoSomado.toString())

    console.log(this.itemsCarrinho)
    
  }

  removerItem(i) {
    console.log(i)
    this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))

    this.itemsCarrinho.splice(i, 1)
    localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho))

    window.location.reload()
  }

  takeUser() {
    this.usuario = this.authService.getCurrentUser();
  }

  finalizar() {
    console.log()
    let dadosUser = localStorage.getItem('currentUser')
    this.ProdutosService.createPedidoDetalhado(this.itemsCarrinho, dadosUser).subscribe(
      (data) => {
      },
      (error) => {
        console.log(error);
      }
    );

    // this.router.navigate(['/metodo']).then(nav => {
    //   window.location.reload()
    // });

  }

}
