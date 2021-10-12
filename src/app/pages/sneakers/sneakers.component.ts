import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.scss']
})
export class SneakersComponent implements OnInit {

  constructor(private ProdutosService: ProdutosService,) { }

  filtro = [
    { value: 'maisvendidos', nome: 'Mais Vendidos' },
    { value: 'pmaiormenor', nome: 'Preço: maior ao menor' },
    { value: 'pmenormaior', nome: 'Preço: menor ao maior' },
    { value: 'az', nome: 'A-Z' },
    { value: 'za', nome: 'Z-A' }
  ]

  produtos
  itemsCarrinho = []

  carregando = true

  ngOnInit() {
    // ################################################################
    // Tirando o finalizar compra caso necessario (ajuste tecnico)
    $(function () {
      document.getElementById("finalizar").style.display = "none";
    });
    // ################################################################


    this.ProdutosService.getProdutosTenis().subscribe(
      (data) => {

        this.produtos = data['mensagem']

        this.carregando = false
      },
      (error) => {
        console.log(error);
      }
    );
  }

  adicionarCarrinho(idProduto, nome, preco, quantidade, imagem) {

    let conjunto = {
      'idProduto': idProduto,
      'Nome': nome,
      'Preco': preco,
      'Quantidade': quantidade,
      'imagem': imagem
    }

    if (JSON.parse(localStorage.getItem('carrinho')) == null) {

      this.itemsCarrinho = []
      this.itemsCarrinho.push(conjunto)
      localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho))
      localStorage.getItem('carrinho')

    } else {

      this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))
      this.itemsCarrinho.push(conjunto)
      localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho))
      localStorage.getItem('carrinho')

    }

  }

  filtros(aux) {

    var a = {
      nome: 'd',
      preco: 23
    }
    var b = {
      nome: 'z',
      preco: 11

    }
    var c = {
      nome: 'g',
      preco: 13

    }

    var array = [];

    array = [a, b, c];
    if (aux == 'az') {
      array.sort(function (a, b) {
        if (a.nome < b.nome) { return -1; }
        if (a.nome > b.nome) { return 1; }
        return 0;
      })
    }
    if (aux == 'za')
      array.sort(function (a, b) {
        if (a.nome > b.nome) { return -1; }
        if (a.nome < b.nome) { return 1; }
        return 0;
      })

      array.sort((a, b) => a.preco - b.preco)
      array.sort((a, b) => b.preco - a.preco)
      debugger



  }

}
