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

}
