import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-detalhado',
  templateUrl: './pedido-detalhado.component.html',
  styleUrls: ['./pedido-detalhado.component.css']
})
export class PedidoDetalhadoComponent implements OnInit {

  idPedido

  constructor() {
    this.idPedido = localStorage.getItem('pedido')
    localStorage.removeItem('pedido')
  }

  ngOnInit() {
    console.log("pega nada otario")
    console.log(this.idPedido)
  }

}
