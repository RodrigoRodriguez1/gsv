import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { ProdutosService } from 'src/app/services/produtos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

//declare function hello(): void;

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,) {

    // $(function () {

    //   var imagens = $('.product-image').length;
    //   var imagemAtual = 0;

    //   atualizarContagemImagens();
    //   avancarImagem();
    //   voltarImagem();

    //   $('.product-image').eq(imagemAtual).css('display', 'block');

    //   function avancarImagem() {
    //     $('#botao-prosseguir').click(function () {
    //       $('.product-image').eq(imagemAtual).css('display', 'none');
    //       imagemAtual++;
    //       if (imagemAtual > imagens - 1) {
    //         imagemAtual = imagens - 1;
    //       }
    //       $('.product-image').eq(imagemAtual).css('display', 'block');
    //     });
    //   }

    //   function voltarImagem() {
    //     $('#botao-voltar').click(function () {
    //       $('.product-image').eq(imagemAtual).css('display', 'none');
    //       imagemAtual--;
    //       if (imagemAtual < 0) {
    //         imagemAtual = 0;
    //       }
    //       $('.product-image').eq(imagemAtual).css('display', 'block');
    //     });
    //   }

    //   function atualizarContagemImagens() {
    //     setInterval(function () {
    //       var numeroTotalImagens = $('.product-image').length;
    //       var numeroAtualImagem = imagemAtual + 1;
    //       var textoContagem = document.getElementById('numero-imagens');
    //       textoContagem.innerHTML = "(" + numeroAtualImagem + "/" + numeroTotalImagens + ")";
    //     });
    //   }

    // });

  }

  sub: any;
  idProduto = 0;
  produtos: any[] = []
  images: any[] = []
  imagem1 : any;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.idProduto = params['id'];
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

    

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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


}
