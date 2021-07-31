import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Renderer2, Inject } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private ProdutosService: ProdutosService,
    private snackBar: MatSnackBar) { }

  usuario

  tipoEntrega
  valorSelecionadoEntrega

  itemsCarrinho
  finalizandoCompra
  precoSomado = 0
  orderData
  pedidoDetalhado
  idPedidoAtual
  precoSomadoFrete


  valorFrete = localStorage.getItem('precoFrete')
  valorFretePAC = localStorage.getItem('precoFretePAC')

  prazoFrete = localStorage.getItem('prazoFrete')
  prazoFretePAC = localStorage.getItem('prazoFretePAC')


  total = localStorage.getItem('somado')

  ngOnInit() {

    $(function () {
      document.getElementById("finalizar").style.display = "none";
    });

    this.takeUser()

    try {
      this.freteUsuario()
      this.freteUsuarioPAC()

      this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))
      this.finalizandoCompra = JSON.parse(localStorage.getItem('carrinho'))

      for (var x = 0; this.finalizandoCompra.length > x; x++) {
        this.precoSomado = + this.finalizandoCompra[x].Preco + this.precoSomado
      }

      if (this.valorFrete != null) {

        this.precoSomadoFrete = ''

        console.log(this.itemsCarrinho)
      } else {
        console.log('é necessário fazer login!')
      }

    } catch {
      this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))
      this.finalizandoCompra = JSON.parse(localStorage.getItem('carrinho'))

      for (var x = 0; this.finalizandoCompra.length > x; x++) {
        this.precoSomado = + this.finalizandoCompra[x].Preco + this.precoSomado
      }

      if (this.valorFrete != null) {

        this.precoSomadoFrete = ''

        console.log(this.itemsCarrinho)
      } else {
        console.log('é necessário fazer login!')
      }
    }
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
    if (this.precoSomadoFrete == '') {
      this.openSnackBar('Você deve selecionar o meio de entrega antes de finalizar a compra!', 'Fechar')
    }
    else {
      let dadosUser = localStorage.getItem('currentUser')
      this.ProdutosService.createPedidoDetalhado(this.itemsCarrinho, dadosUser).subscribe(
        (data) => {
        },
        (error) => {
          console.log(error);
        }
      );


      this.router.navigate(['/metodo']).then(nav => {
        setTimeout(() => {
          window.location.reload()
          window.location.reload()
          window.location.reload()
        }, 1000);
      });
    }
  }

  // PEGANDO O FRETE DO USUARIO SEDEX
  freteUsuario() {
    this.ProdutosService.getFreteSEDEX().subscribe(ret => {

      this.valorFrete = ret['valor']
      this.prazoFrete = ret['prazo']
      console.log(this.valorFrete)
      localStorage.setItem('precoFrete', this.valorFrete)
      localStorage.setItem('prazoFrete', this.prazoFrete)
    })
  }

  // Pegando o valor de frete do usuario SEDEX
  freteUsuarioPAC() {
    this.ProdutosService.getFretePAC().subscribe(ret => {

      this.valorFretePAC = ret['valor']
      this.prazoFretePAC = ret['prazo']
      console.log(this.valorFretePAC)
      localStorage.setItem('precoFretePAC', this.valorFretePAC)
      localStorage.setItem('prazoFretePAC', this.prazoFretePAC)
    })
  }


  attFrete() {
    console.log("ae")
    console.log(this.tipoEntrega)
    if (this.tipoEntrega == 'pac') {
      this.valorSelecionadoEntrega = this.valorFretePAC

      let valorFreteTratado = this.valorFretePAC.replace(',', '.')
      // Capturando o tipo de entrega informada pelo usuario

      this.precoSomadoFrete = Number(this.precoSomado) + Number(valorFreteTratado)

      localStorage.setItem('somado', this.precoSomadoFrete.toString())
      localStorage.getItem('somado')

      // Para enviar para o pedido no dash:
      localStorage.setItem('entrega', this.tipoEntrega)
      localStorage.getItem('entrega')

    } else if (this.tipoEntrega = 'sedex') {
      this.valorSelecionadoEntrega = this.valorFrete

      let valorFreteTratado = this.valorFrete.replace(',', '.')
      // Capturando o tipo de entrega informada pelo usuario

      this.precoSomadoFrete = Number(this.precoSomado) + Number(valorFreteTratado)

      localStorage.setItem('somado', this.precoSomadoFrete.toString())
      localStorage.getItem('somado')

      // Para enviar para o pedido no dash:
      localStorage.setItem('entrega', this.tipoEntrega)
      localStorage.getItem('entrega')
    }
  }

  // snackbar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });

  }


}
