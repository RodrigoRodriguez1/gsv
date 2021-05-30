import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-used',
  templateUrl: './used.component.html',
  styleUrls: ['./used.component.scss']
})
export class UsedComponent implements OnInit {

  constructor() { }

  roupas = [
    {
        id: 0,
        nome: 'Nome do Produto',
        img: '../images/Categoria_roupa.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    },
    {
        id: 1,
        nome: 'Nome do Produto',
        img: '../images/Categoria_roupa.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    },
    {
        id: 2,
        nome: 'Nome do Produto',
        img: '../images/Categoria_roupa.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    },
    {
        id: 3,
        nome: 'Nome do Produto',
        img: '../images/Categoria_roupa.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    }
]

  ngOnInit() {
    // ################################################################
    // Tirando o finalizar compra caso necessario (ajuste tecnico)
    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });
    // ################################################################
  }

}
