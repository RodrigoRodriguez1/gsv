import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {

  constructor(private authService: AuthService) { }

  usuario

  ngOnInit() {    
    this.takeUser()

    console.log(this.usuario)
  }

  takeUser() {
    this.usuario = this.authService.getCurrentUser();
  }

}
