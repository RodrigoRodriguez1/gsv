import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';  
import { Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public formBuilder: FormBuilder,) { }

  registerForm: FormGroup;


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

   editarFornecedor(): void {
    debugger  
    if (this.registerForm.valid) {

   
    }
  }
}
