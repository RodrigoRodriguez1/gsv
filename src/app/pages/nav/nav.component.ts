import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  usuario;
  qtdCarrinhoParse;
  qtdCarrinho;

  cookies: any = 'true'

  ngOnInit() {
    this.takeUser()

    this.qtdCarrinhoParse = JSON.parse(localStorage.getItem('carrinho'))
    if (JSON.parse(localStorage.getItem('carrinho')) == null) {
      this.qtdCarrinho = 0
    } else {
      this.qtdCarrinho = this.qtdCarrinhoParse.length
    }

    // Verificando se o usuario aceitou os cookies:

    this.cookies = localStorage.getItem('cookies')
    if(this.cookies == null)
    this.cookies = 'true'
  }

  takeUser() {
    this.usuario = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logoutUser()
    this.router.navigate(['/']).then(nav => {
      window.location.reload();
    });
  }

  areacliente() {
    this.router.navigate(['/area-cliente']).then(nav => {
      // window.location.reload();
    });
  }

  async carrinho() {
    await localStorage.removeItem("globalId")

    this.router.navigate(['/carrinho']).then(nav => {
      window.location.reload()
    });
  }

  proCookies() {
    this.cookies = false
    localStorage.setItem('cookies', 'false')
  }

}
