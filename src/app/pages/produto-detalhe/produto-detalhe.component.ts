import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { ProdutosService } from 'src/app/services/produtos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UsersService } from 'src/app/services/user.service';
import { MatGridTileHeaderCssMatStyler, MatSnackBar } from '@angular/material';

import { Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms'


@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private userService: UsersService,
    private snackBar: MatSnackBar,) {
  }

  cep

  sub: any;
  idProduto = 0;
  nomeProduto = ''
  precoProduto = 0
  quantidadeProduto = 0
  imagemProduto = ''
  valorPropriedade
  propriedades: any
  produtos: any = []
  images: any[] = []
  imagem1: any;
  itemsCarrinho = []

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.idProduto = params['id'];
      this.nomeProduto = params['nome']
      this.precoProduto = params['preco']
      this.quantidadeProduto = params['quantidade']
      this.imagemProduto = params['imagem']
    })

    // carregando as propriedades
    this.produtosService.getPropriedadesProduto(this.idProduto).subscribe(ret => {
      this.propriedades = ret
    })

    this.produtosService.getProduto(this.idProduto).subscribe((data: { [x: string]: any; }) => {
      if (data.resultado.length != 0) {
        this.produtos = data.resultado[0]

        this.produtosService.getProdutoImage(this.idProduto, 1).subscribe((data: { [x: string]: any; }) => {
          this.images.push(data.resultado[0].imagem)
          this.imagem1 = data.resultado[0].imagem

          this.produtosService.getProdutoImage(this.idProduto, 2).subscribe((data: { [x: string]: any; }) => {

            this.images.push(data.resultado[0].imagem)

            this.produtosService.getProdutoImage(this.idProduto, 3).subscribe((data: { [x: string]: any; }) => {

              this.images.push(data.resultado[0].imagem)

              this.produtosService.getProdutoImage(this.idProduto, 4).subscribe((data: { [x: string]: any; }) => {
                this.images.push(data.resultado[0].imagem)

                this.produtosService.getProdutoImage(this.idProduto, 5).subscribe((data: { [x: string]: any; }) => {
                  this.images.push(data.resultado[0].imagem)
                })

              })


            })
          })
        })



      }
    })


    // Calculo da Parcela
    var spanDoResultPrimeiro = document.getElementById("pc-calc")
    spanDoResultPrimeiro.innerHTML += Math.ceil(this.precoProduto / 10);

    var spanDoResultSegundo = document.getElementById("pc-or-calc")
    spanDoResultSegundo.innerHTML += Math.ceil(this.precoProduto * 0.90)

    // C??digo ruim pra mostrar as tabelas

    $("#btn-masculino").click(function(){
      $(".tabela-masculino").animate({
        height: 'toggle'
      })
    })

    $("#btn-feminino").click(function(){
      $(".tabela-feminino").animate({
        height: 'toggle'
      })
    })

    $("#btn-infantil").click(function(){
      $(".tabela-infantil").animate({
        height: 'toggle'
      })
    })

    // Mais c??digo ruim pra mostrar as tabelas no celular

    $("#btn-masculino-celular").click(function(){
      $(".tabela-masculino").animate({
        height: 'toggle'
      })
    })

    $("#btn-feminino-celular").click(function(){
      $(".tabela-feminino").animate({
        height: 'toggle'
      })
    })

    $("#btn-infantil-celular").click(function(){
      $(".tabela-infantil").animate({
        height: 'toggle'
      })
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      100: {
        items: 2
      },
      140: {
        items: 3
      },
      200: {
        items: 1
      }
    },
    nav: true
  }


  valorFretePAC
  prazoFretePAC

  valorFreteSEDEX
  prazoFreteSEDEX

  loadingPAC = false
  loadingSEDEX = false
  consultaCEP(cep) {
    console.log('cep: ')
    console.log(cep)
    this.userService.consultaCEP(cep).subscribe(result => {
      console.log('retorno consulta cep: ')
      console.log(result['dadosCEP'])

      if (result['dadosCEP'] != 'nao_encontrado') {

        // VALOR DO PAC: 
        this.produtosService.getFretePACProduct(cep).subscribe(ret => {
          this.valorFretePAC = ret['valor']
          this.prazoFretePAC = ret['prazo']
          // console.log(this.valorFretePAC)
          this.loadingPAC = true
        })

        // VALOR DO SEDEX: 
        this.produtosService.getFreteSEDEXProduct(cep).subscribe(ret => {
          this.valorFreteSEDEX = ret['valor']
          this.prazoFreteSEDEX = ret['prazo']
          // console.log(this.valorFreteSEDEX)
          this.loadingSEDEX = true
        })


      } else {
        this.cep = ''

        this.showMessage('O CEP informado est?? invalido!')
      }


    })
  }

  atribuiValorPropriedade(value: any) {
    console.log(value)
    this.valorPropriedade = value
  }


  adicionarCarrinho() {
    console.log(this.valorPropriedade)
    // Tratamento de erro caso o usuario nao selecione a propriedade
    if (this.valorPropriedade == undefined) {
      this.showMessage('Selecione o tamanho desejado antes de adicionar ao carrinho.')
    } else {
      let conjunto = {
        'idProduto': this.idProduto,
        'Nome': this.nomeProduto,
        'Preco': this.precoProduto,
        // 'Quantidade': this.valorPropriedade.quantidade,
        'propriedade': this.valorPropriedade,
        'imagem': this.imagemProduto
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
      this.showMessage('Produto adicionado no carrinho.')
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }


  showMessage(msg: string, isErro: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isErro ? ['msg-erro'] : ['msg-success']
    })
  }
}
