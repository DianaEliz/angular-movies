import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: string, pword: string) {
    if (uname === 'diana' && pword === '12345') {
      return 200;
    }
    return 403;
  }

  logout() {
    this.router.navigate(['login']);
  }
}
