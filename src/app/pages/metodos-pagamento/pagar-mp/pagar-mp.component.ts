import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pagar-mp',
  templateUrl: './pagar-mp.component.html',
  styleUrls: ['./pagar-mp.component.css']
})
export class PagarMpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      document.getElementById("finalizar").style.display = "flex";
    });

  }

}
