import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private authService: AuthService) { }

  usuario

  itemsCarrinho

  ngOnInit() {
    this.takeUser()

    this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))
  }

  removerItem(i) {
    console.log(i)
    this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))

    this.itemsCarrinho.splice(i, 1)
    localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho))
  }

  takeUser() {
    this.usuario = this.authService.getCurrentUser();
  }

}
