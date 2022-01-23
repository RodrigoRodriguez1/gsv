import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = "https://gsvapparel.com/api/usuarios/"  
  // url = "http://localhost:3000/usuarios/"

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  loginUser(email: string, senha: string): Observable<any> {
    return this.http.post(this.url + 'loginec', { email, senha }, { headers: this.headers })
      .pipe(map(data => data))
  }

  setUser(user): void {
    let user_string = JSON.stringify(user)
    localStorage.setItem("currentUser", user_string)
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token)
  }

  getToken() {
    return localStorage.getItem("accessToken")
  }

  getCurrentUser() {
    let user_string = localStorage.getItem("currentUser")
    if (
      user_string) {
      let user = JSON.parse(user_string)
      return user
    } else {
      return null
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem('accessToken')
    const url_api = `https://companythoth.com.br/usuarios/logout?access_token=${accessToken}`
    //const url_api = `http://localhost:3002/usuarios/logout?access_token=${accessToken}`
    localStorage.removeItem("accessToken")
    localStorage.removeItem("currentUser")
    localStorage.removeItem("products")
    localStorage.removeItem("complementaryInfo")
    localStorage.removeItem("infoKM")
    return this.http.post(url_api, { headers: this.headers })
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
