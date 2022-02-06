import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedido-detalhado',
  templateUrl: './pedido-detalhado.component.html',
  styleUrls: ['./pedido-detalhado.component.css']
})
export class PedidoDetalhadoComponent implements OnInit {

  idPedido
  STATUS
  pedidoDet

  somado = 0

  carregando = true

  constructor(private pedidosService: PedidosService,) {
    this.idPedido = localStorage.getItem('pedido')
  }

  ngOnInit() {

    this.pedidosService.pedidoDetalhadoAreaCliente(this.idPedido).subscribe(data => {
      this.pedidoDet = data
      if (this.pedidoDet.error == 'negada') {
        alert('Permissao negada.')
      } else {
        this.STATUS = data[0].STATUS

        for (let x = 0; this.pedidoDet.length > x; x++) {
          this.somado += this.pedidoDet[x].preco
        }

        this.carregando = false
      }
    })

  }


}
