import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { ProdutosService } from 'src/app/services/produtos.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router, private ProdutosService: ProdutosService) { }

  registerForm: FormGroup;
  errorSenha: boolean = false
  token;
  valorFrete
  valorFretePAC

  prazoFrete
  prazoFretePAC


  ngOnInit() {
    // ################################################################
    // Tirando o finalizar compra caso necessario (ajuste tecnico)
    $(function () {
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
        if (this.registerForm.controls['login'].value === data.results[0].email) {
          this.authService.setUser(data['results'][0])
          this.token = data.token
          this.authService.setToken(this.token)
          this.freteUsuario()
          this.freteUsuarioPAC()
          this.router.navigate(['/']).then(nav => {
            window.location.reload();
          });
        }

      }, error => {
        this.errorSenha = true, console.log(error)
      })
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

  // Pegando o valor de frete do usuario SEDEX
  freteUsuario() {
    this.ProdutosService.getFreteSEDEX().subscribe(ret => {
      console.log("AAAA")
      console.log(ret)
      this.valorFrete = ret['valor']
      this.prazoFrete = ret['prazo']

      console.log(this.valorFrete)
      localStorage.setItem('precoFrete', this.valorFrete)
      localStorage.setItem('prazoFrete', this.prazoFrete)
    })
  }

  // Pegando o valor de frete do usuario SEDEX
  freteUsuarioPAC() {
    this.ProdutosService.getFretePAC().subscribe(ret => {
      console.log("BBB")
      console.log(ret)
      this.valorFretePAC = ret['valor']
      this.prazoFretePAC = ret['prazo']
  
      console.log(this.valorFretePAC)
      localStorage.setItem('precoFretePAC', this.valorFretePAC)
      localStorage.setItem('prazoFretePAC', this.prazoFretePAC)

    })
  }

}
