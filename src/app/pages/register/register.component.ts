import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private snackBar: MatSnackBar,  private userService: UsersService,  private router: Router) { }

  registerForm: FormGroup;
  cadastroUsuario

  ngOnInit() {
    // ################################################################
    // Tirando o finalizar compra caso necessario (ajuste tecnico)
    $(function(){
      document.getElementById("finalizar").style.display = "none";
    });
    // ################################################################



    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }


  save() {

    if (this.registerForm.valid) {
      if (this.validarSenha()) {
          this.userService.createUser(this.registerForm.value).subscribe(res => {
           debugger;
            this.cadastroUsuario = res
            this.showMessage('Cadastrado com sucesso!')
  
          }, error => {
            debugger
            if (error.status === 409)
              this.showMessage('E-mail já cadastrado')
  
            console.log(error)
          })
      } else {
        this.showMessage('Os campos Senha e Confirmar Senha devem ser iguais')
      }
    } else {
      this.showMessage('Preencha todos os campos')
      Object.keys(this.registerForm.controls).forEach(campo => {
      })
    }
  }

  validarSenha() {
    if (this.registerForm.controls['senha'].value == this.registerForm.controls['confirmarSenha'].value) {
      return true;
    } else {
      return false;
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


