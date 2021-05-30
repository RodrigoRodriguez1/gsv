import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';  
import { Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public formBuilder: FormBuilder,private authService: AuthService, private snackBar: MatSnackBar,private router: Router) { }

  registerForm: FormGroup;
  errorSenha: boolean = false
  token;


  ngOnInit() {
    // ################################################################
    // Tirando o finalizar compra caso necessario (ajuste tecnico)
    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });
    // ################################################################


    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.registerForm.valid) {
    return this.authService.loginUser(this.registerForm.value['login'], this.registerForm.value['password']).subscribe(data => {
      debugger
      if (this.registerForm.controls['login'].value === data.results[0].email) {
        this.authService.setUser(data['results'][0])
        this.token = data.token
        this.authService.setToken(this.token)
        this.router.navigate(['/']).then(nav => {
          window.location.reload();
        });
      }

    }, error => { 
      this.errorSenha = true, console.log(error) })
    } else {
      this.showMessage('Preencha todos os campos')
      Object.keys(this.registerForm.controls).forEach(campo => {
      })
    }
  }

  showMessage(msg: string, isErro: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isErro ? ['msg-erro'] : ['msg-success']
    })
  }

}
