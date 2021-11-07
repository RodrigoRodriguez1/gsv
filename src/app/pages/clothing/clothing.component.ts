import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

  constructor(
    private ProdutosService: ProdutosService,
  ) { }
  filtro = [
    // { value: 'maisvendidos', nome: 'Mais Vendidos' },
    { value: 'pmaiormenor', nome: 'Preço: maior ao menor' },
    { value: 'pmenormaior', nome: 'Preço: menor ao maior' },
    { value: 'az', nome: 'A-Z' },
    { value: 'za', nome: 'Z-A' }
  ]

  produtos
  produtosBK = []
  itemsCarrinho = []

  carregando = true
  cores = []
  marca = []

  ngOnInit() {

    // ################################################################
    // Tirando o finalizar compra caso necessario (ajuste tecnico)
    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });
    // ################################################################

    this.ProdutosService.getProdutos().subscribe(
      (data) => {
      
        this.produtos = data['mensagem']
        this.produtosBK = data['mensagem']
        
        this.produtos.forEach(e => {
          this.cores.push(e.cor.toString().toLowerCase())
        });

        this.cores =  this.cores.reduce(function(a,b){
          if (a.indexOf(b) < 0 ) a.push(b);
          return a;
        },[]);

        this.produtos.forEach(e => {
          this.marca.push(e.marca.toString().toLowerCase())
        });

        this.marca =  this.marca.reduce(function(a,b){
          if (a.indexOf(b) < 0 ) a.push(b);
          return a;
        },[]);

        this.carregando = false

      },
      (error) => {
        console.log(error);
      }
    );
  }

 
  adicionarCarrinho(idProduto, nome, preco, quantidade, imagem) {

    let conjunto = {
      'idProduto': idProduto,
      'Nome': nome,
      'Preco': preco,
      'Quantidade': quantidade,
      'imagem': imagem
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

  filtros(aux) {

    if (aux.value == 'az') {
     this.produtos.sort(function (a, b) {
        if (a.nome < b.nome) { return -1; }
        if (a.nome > b.nome) { return 1; }
        return 0;
      })
    }
    if (aux.value  == 'za')
    this.produtos.sort(function (a, b) {
        if (a.nome > b.nome) { return -1; }
        if (a.nome < b.nome) { return 1; }
        return 0;
      })

      if(aux.value == "pmaiormenor"){
        this.produtos.sort((a, b) => b.preco - a.preco)

      }
      if(aux.value == "pmenormaior") {
        this.produtos.sort((a, b) => a.preco - b.preco)

      }

      

  }

  filtroCores(aux){
    this.produtos = this.produtosBK
    this.produtos = this.produtos.filter( e  => (e.cor.toLowerCase() == aux.value));
    debugger

  }

  filtroMarcas(aux){
    this.produtos = this.produtosBK
    this.produtos = this.produtos.filter( e  => (e.marca.toLowerCase() == aux.value));
  }

  
  filtroNome(aux){
    this.produtos = this.produtosBK
    if(aux.target.value != ""){
    this.produtos = this.produtos.filter( e  => (e.nome.toLowerCase().match( aux.target.value.toLowerCase())));
  }

  }

}

