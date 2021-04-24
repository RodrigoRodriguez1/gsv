import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    constructor(private http: HttpClient,
        private snackBar: MatSnackBar) { }

    url = 'http://localhost:3000/usuarios/cadastro'

    createUser(request){
        return this.http.post(this.url, request)
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
