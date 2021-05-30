import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-metodos-pagamento',
  templateUrl: './metodos-pagamento.component.html',
  styleUrls: ['./metodos-pagamento.component.css']
})
export class MetodosPagamentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function(){
      document.getElementById("finalizar").style.display = "flex";
    });

  }

}
