import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-used',
  templateUrl: './used.component.html',
  styleUrls: ['./used.component.scss']
})
export class UsedComponent implements OnInit {

  constructor(private ProdutosService: ProdutosService,) { }

  produtos
  itemsCarrinho = []

  ngOnInit() {
    // ################################################################
    // Tirando o finalizar compra caso necessario (ajuste tecnico)
    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });
    // ################################################################


    this.ProdutosService.getProdutosUsados().subscribe(
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

  }


}
