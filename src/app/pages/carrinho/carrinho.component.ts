import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor() { }

  itemsCarrinho
  itemsCarrinhoRemovido

  ngOnInit() {
    this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))

    console.log(this.itemsCarrinho)
  }

  removerItem(i) {
    console.log(i)
    this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))

    this.itemsCarrinhoRemovido = this.itemsCarrinho.splice(i)
    console.log(this.itemsCarrinhoRemovido)
    // localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinhoRemovido))
  }

}
