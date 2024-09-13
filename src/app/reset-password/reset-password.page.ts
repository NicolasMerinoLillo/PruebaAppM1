import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    if (this.username) {
      this.router.navigate(['/login']);
    } else {
      console.log('El campo de nombre de usuario está vacío');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/home'], { queryParams: { username: 'invitado' } });
  }
}
