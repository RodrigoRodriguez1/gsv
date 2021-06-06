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

    urlProd = "http://localhost:3000/usuarios/"  
    urlLocal = "http://localhost:3000/usuarios/"  

    createUser(request){
        return this.http.post(this.urlProd + 'cadastro', request)
    }

}
