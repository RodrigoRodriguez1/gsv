import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
      $(function(){

          // Gambiarra.ts :(


          $("#adq").click(function(){
            $("#adq-context").animate({
              height: 'toggle'
            })
          })

          $("#tms").click(function(){
            $("#tms-context").animate({
              height: 'toggle'
            })
          })

          $("#pfe").click(function(){
            $("#pfe-context").animate({
              height: 'toggle'
            })
          })

          $("#ptd").click(function(){
            $("#ptd-context").animate({
              height: 'toggle'
            })
          })

          $("#pr").click(function(){
            $("#pr-context").animate({
              height: 'toggle'
            })
          })

          $("#pv").click(function(){
            $("#pv-context").animate({
              height: 'toggle'
            })
          })

      })

  }

}
