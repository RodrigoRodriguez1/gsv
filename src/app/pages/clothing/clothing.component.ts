import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

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
  }

}
