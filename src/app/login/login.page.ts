import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.router.navigate(['/home'], { queryParams: { username: this.username } });
    } else {
      console.log('Nombre de usuario o contraseña vacíos');
    }
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }

  goToHome() {
    this.router.navigate(['/home'], { queryParams: { username: 'invitado' } });
  }
}
