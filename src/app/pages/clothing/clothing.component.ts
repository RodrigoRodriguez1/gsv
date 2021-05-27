import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

  constructor(
    private ProdutosService: ProdutosService,
  ) { }

  itemsCarrinho = []
  produtos

  ngOnInit() {

    this.ProdutosService.getProdutos().subscribe(
      (data) => {
        console.log(data['mensagem'])
        this.produtos = data['mensagem']
      },
      (error) => {
        console.log(error);
      }
    );
  }

  adicionarCarrinho(idProduto, nome, preco, quantidade) {

    let conjunto = {
      'idProduto': idProduto,
      'Nome': nome,
      'Preco': preco,
      'Quantidade': quantidade
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

    let fodase = JSON.parse(localStorage.getItem('carrinho'))

  }

}
