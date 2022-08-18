import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User;
  errorMsg = "";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.name.trim().length === 0) {
      this.errorMsg = "Username is required."
    } else if (this.user.password.trim().length === 0) {
      this.errorMsg = "Password is required."
    } else {
      let res = this.auth.login(this.user.name, this.user.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMsg = "Ivalid credentials."
      }
    }
  }
}
