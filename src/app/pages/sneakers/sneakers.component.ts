import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.scss']
})
export class SneakersComponent implements OnInit {

  constructor() { }

  tenis = [
    
    
    {
        id: 0,
        nome: 'Nome do Produto',
        img: '../images/Categoria_tenis.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    },
    {
        id: 1,
        nome: 'Nome do Produto',
        img: '../images/Categoria_tenis.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    },
    {
        id: 2,
        nome: 'Nome do Produto',
        img: '../images/Categoria_tenis.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    },
    {
        id: 3,
        nome: 'Nome do Produto',
        img: '../images/Categoria_tenis.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    },
    {
        id: 4,
        nome: 'Nome do Produto',
        img: '../images/Categoria_tenis.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    },
    {
        id: 5,
        nome: 'Nome do Produto',
        img: '../images/Categoria_tenis.jpg',
        genero: 'Gênero',
        preco: 200.00,
        link: ''
    }
]

  ngOnInit() {
  }

}
