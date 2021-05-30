import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Renderer2, Inject } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) {}

  usuario

  itemsCarrinho

  finalizandoCompra
  precoSomado = 0
  orderData

  ngOnInit() {

    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });

    this.takeUser()

    this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))

    this.finalizandoCompra = JSON.parse(localStorage.getItem('carrinho'))
    for(var x = 0; this.finalizandoCompra.length > x; x++) {
      this.precoSomado =+ this.finalizandoCompra[x].Preco + this.precoSomado
    }

    localStorage.setItem('somado', this.precoSomado.toString())

    console.log(this.precoSomado)
  }

  removerItem(i) {
    console.log(i)
    this.itemsCarrinho = JSON.parse(localStorage.getItem('carrinho'))

    this.itemsCarrinho.splice(i, 1)
    localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho))

    window.location.reload()
  }

  takeUser() {
    this.usuario = this.authService.getCurrentUser();
  }

  finalizar() {

    this.router.navigate(['/metodo']).then(nav => {
      window.location.reload()
    });

//     this.orderData = {
//       quantity: 1,
//       description: "Compra GSV",
//       price: this.precoSomado
//     };

//     fetch("http://localhost:3000/pagamentos/create_preference", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(this.orderData),
// })


//   .then(function(response) {
//       return response.json();
//   })
//   .then(function(preference) {
//       this.createCheckoutButton(preference.id);
//   })
//   .catch(function() {
    
//   });;


//     var script = document.createElement("script");
  
//     // The source domain must be completed according to the site for which you are integrating.
//     // For example: for Argentina ".com.ar" or for Brazil ".com.br".
//     script.src = "https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js";
//     script.type = "text/javascript";
//     script.dataset.preferenceId = preference;
//     document.getElementById("button-checkout").innerHTML = "";
//     document.querySelector("#button-checkout").appendChild(script);
  }

}
