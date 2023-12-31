import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user : any = {}
  constructor(private http : HttpClient, private router: Router) {
    if (localStorage.getItem('token')) {
      this.user = JSON.parse(localStorage.getItem('user') as '')
    
    } 
  }
  active : any= 'dashboard'
 
  baseUrl = 'http://localhost:3000/api'
  login(params : any) {
        return this.http.post(`${this.baseUrl}/login`,params)
  }
  isLogined() {
    if (localStorage.getItem('token')) {
      return true
    }
    return false
  }
  isAdmin(): boolean {
   
    if (this.isLogined() && this.user.role === 'admin') {
        return true
    }
    return false
  }
  isUser(): boolean {
    if (this.isLogined() && this.user.role === 'user') {
        return true
    }
    return false
  }
  doUserRedirects(resp: any) {

    switch (resp.data.role) {
        case 'admin': {
            this.router.navigate(['/admin'])
            break
        }
        case 'user': {
            this.router.navigate(['/home'])
            break
        }
    }
  }
  logOut(): boolean {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.user.id = 0
    return true
  }
}
