import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

//declare function hello(): void;

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  constructor() { 

    $(function(){

      var imagens = $('.product-image').length;
      var imagemAtual = 0;
      
      atualizarContagemImagens();
      avancarImagem();
      voltarImagem();

      $('.product-image').eq(imagemAtual).css('display','block');

      function avancarImagem(){
          $('#botao-prosseguir').click(function(){
            $('.product-image').eq(imagemAtual).css('display','none');
            imagemAtual++;
            if(imagemAtual > imagens - 1){
                imagemAtual = imagens - 1;
            }
            $('.product-image').eq(imagemAtual).css('display','block');
          });
      }

      function voltarImagem(){
          $('#botao-voltar').click(function(){
            $('.product-image').eq(imagemAtual).css('display','none');
            imagemAtual--;
            if(imagemAtual < 0){
                imagemAtual = 0;
            }
            $('.product-image').eq(imagemAtual).css('display','block');
          });
      }

      function atualizarContagemImagens(){
        setInterval(function(){
          var numeroTotalImagens = $('.product-image').length;
          var numeroAtualImagem = imagemAtual + 1;
          var textoContagem = document.getElementById('numero-imagens');
          textoContagem.innerHTML = "(" + numeroAtualImagem + "/" + numeroTotalImagens + ")";
        });
      }

    });

  }

  ngOnInit() {
  }

}
