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

  ngOnInit() {
    this.takeUser()
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

}
