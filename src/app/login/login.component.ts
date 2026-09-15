import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = true;
  showPassword = false;
  errorMessage = '';

  constructor(private readonly router: Router) {}

  login(): void {
    if (this.username.trim() === 'Shreya Soni' && this.password === '143shreyaji') {
      this.errorMessage = '';
      this.router.navigate(['/home']);
      return;
    }

    this.errorMessage = 'Username ya password match nahi hua. Phir se try karo.';
  }
}
