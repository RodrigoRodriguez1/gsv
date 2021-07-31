import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-metodos-pagamento',
  templateUrl: './metodos-pagamento.component.html',
  styleUrls: ['./metodos-pagamento.component.css']
})
export class MetodosPagamentoComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {

    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });

  }

  goMercadoPago() {
    this.router.navigate(['/pagar-mp']).then(nav => {
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    });
  }

}
