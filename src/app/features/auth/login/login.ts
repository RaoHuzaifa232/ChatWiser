import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthService);
  darkMode: boolean = false;
  isLoading = false;

  fb: FormBuilder = new FormBuilder();
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  get emailControl() {
    return this.form.get('email');
  }

  showPassword = false;

  get passwordControl() {
    return this.form.get('password');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToSignup(): void {
    this._router.navigate(['/auth/signup']);
  }
  navigateToHome(): void {
    this._router.navigate(['/home']);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (
      this.form.invalid ||
      this.emailControl?.value == null ||
      this.passwordControl?.valid == null
    )
      return;
    this.isLoading = true;
    const loginPayload = {
      email: this.emailControl.value,
      password: this.passwordControl.value,
    };

    this._authService.login(loginPayload).then(() => {
      this.isLoading = false;
    });
  }
}
