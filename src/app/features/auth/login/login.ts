import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly router = inject(Router);
  darkMode: boolean = false;
  isLoading = false;

  fb: FormBuilder = new FormBuilder();
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
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
    this.router.navigate(['/auth/signup']);
  }
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      // Proceed with auth logic
    }, 2000);
  }
}
