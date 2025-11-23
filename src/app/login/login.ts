import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  authService = inject(AuthService);
  user$ = this.authService.user$;
  private router = inject(Router);

  login() {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
