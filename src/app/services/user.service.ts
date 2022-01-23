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

    url = "https://gsvapparel.com/api/"
    // url = "http://localhost:3000/"

    createUser(request){
        return this.http.post(this.url + 'usuarios/cadastro', request)
    }

    consultaCEP(cep) {
        return this.http.get(this.url + 'pagamentos/consultaCEP/' + cep)
    }

}
