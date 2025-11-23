<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
=======
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> b47aed593217ca65d364ba803a1c42c70418a59c
import { AuthService } from '../auth.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [AsyncPipe, NgIf],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
<<<<<<< HEAD
  changeDetection: ChangeDetectionStrategy.OnPush,
=======
>>>>>>> b47aed593217ca65d364ba803a1c42c70418a59c
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
