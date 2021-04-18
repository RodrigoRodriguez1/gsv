import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function(){


      // VARIÁVEIS DA FUNÇÃO "IMAGE DATA"
      var curData = 0;
      var maxData = $('.image-data-single').length;
      
      const items = [
        {
            id: 0,
            nome: 'Nome do Produto',
            img: '../../../images/Categoria_roupa.jpg',
            genero: 'Gênero',
            preco: 200.00,
            quantidade: 0,
            link: ''
        },
        {
            id: 1,
            nome: 'Nome do Produto',
            img: '../../../images/Categoria_roupa.jpg',
            genero: 'Masculino',
            preco: 200.00,
            quantidade: 0,
            link: ''
        },
        {
            id: 2,
            nome: 'Nome do Produto',
            img: '../../../images/Categoria_roupa.jpg',
            genero: 'Masculino',
            preco: 200.00,
            quantidade: 0,
            link: ''
        }
    ]
      
      // VARIÁVEIS DA CATEGORIA DESTAQUE
      var currentItem = 0;
      var maxItem = $('.content-wraper').length;
      var minItem = -1;
      
      
      
      image_data_func();
      destaque_images();
      clickArrow();
      clickArrowBack();
        // startLoja()
      
      // FUNÇÃO PARA A TROCA DAS "IMAGE DATA"
      function image_data_func(){
          $('.image-data-single').eq(0).fadeIn();
          setInterval(function(){
              $('.image-data-single').eq(curData).fadeOut(2000);
              curData+=1;
              if(curData == maxData){
                  curData = 0;
              }
              $('.image-data-single').eq(curData).fadeIn(2000);
          },5000);
      }
      
      
      // * FUNÇÕES PARA A CATEGORIA DESTAQUE * // 
      
      function destaque_images(){
          $('.content-wraper').eq(currentItem).fadeIn(1);
      }
      
      // AVANÇARA A LISTA
      function clickArrow(){
          $('#arrow-change-right').click(function(){
              $('.content-wraper').eq(currentItem).fadeOut(1);
              currentItem+=1;
              if(currentItem == maxItem){
                  currentItem = 0;
              }
              $('.content-wraper').eq(currentItem).fadeIn(1);
          });
      }
      
      // VOLTAR 
       function clickArrowBack(){
          $('#arrow-change-left').click(function(){
              $('.content-wraper').eq(currentItem).fadeOut(1);
              currentItem-=1;
              if(currentItem == minItem){
                  currentItem = 0;
              }
              $('.content-wraper').eq(currentItem).fadeIn(1);
          });
      }
      
     

    function startLojaEX(){
        var produtosCont = document.getElementById('content-wp');
        items.map((val)=>{
            produtosCont.innerHTML+= `
            
            <div class="product-wraper">
            <div key="`+val.id+`" style="background-image:url('https://www.leveshoes.com.br/wp-content/uploads/2019/12/Nike-Air-Jordan-Preto-Vermelho-3-300x300.jpg')" class="product-content-single produtoL"></div>
            <div class="info-product">
                <h3>`+val.nome+`</h3>
                <p>`+val.genero+`</p>
                <p style="color:#2b922c;">R$`+val.preco+`</p>
                </div>
            </div>
            
            `;
        })
    }

      
      });


      

  }

}
