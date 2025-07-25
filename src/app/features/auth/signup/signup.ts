import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DarkModeService } from '../../../services/dark-mode.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  private readonly _router = inject(Router);
  private readonly darkModeService = inject(DarkModeService);
  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;
  fb: FormBuilder = new FormBuilder();

  form: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    confirmPassword: ['', Validators.required],
  });

  constructor(private authService: AuthService) {}

  get darkMode() {
    return this.darkModeService.darkMode();
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword():void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    if (this.form.invalid) return;
    if (
      this.form.invalid ||
      this.form.get('email')?.value == null ||
      this.form.get('password')?.value == null
    )
      return;
    this.isLoading = true;
    const signupPayload = {
      username: this.form.get('fullName')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };

    this.authService.signUp(signupPayload).subscribe({
      next: (res) => {
        this.isLoading = false;
        console.log('Signup success', res);
        // Navigate or show success message here
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Signup error', err);
        // Show error message here
      }
    });
  }

  navigateToLogin():void {
    this._router.navigate(['/auth/login']);
  }
  navigateToHome():void {
    this._router.navigate(['/home']);
  }

  get f() {
    return this.form.controls;
  }
}
