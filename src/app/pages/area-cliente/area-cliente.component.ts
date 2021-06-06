import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as $ from 'jquery';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {

  constructor(private authService: AuthService,
    private pedidosService: PedidosService,
    private router: Router) { }

  usuario
  pedidos
  ngOnInit() {

    // ################################################################
    // Tirando o finalizar compra caso necessario (ajuste tecnico)
    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });
    // ################################################################

    
    this.takeUser()

    this.pedidosService.getPedidosCliente(this.usuario.id_usuario).subscribe(data => {
      // console.log("data: ")
      // console.log(data)
      this.pedidos = data
    })
    
  }

  takeUser() {
    this.usuario = this.authService.getCurrentUser();
  }

  goDetalhados(id) {
    this.router.navigate(['/pedido-detalhado']).then(nav => {
      localStorage.setItem('pedido', id)
      window.location.reload()
    });
  }

}
