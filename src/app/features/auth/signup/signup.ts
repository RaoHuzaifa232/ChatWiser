import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  private readonly router = inject(Router);

  darkMode = false;
  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;
  fb: FormBuilder = new FormBuilder();

  form: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  });

  toggleDarkMode():void {
    this.darkMode = !this.darkMode;
  }

  togglePassword():void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword():void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  handleSubmit():void {
    if (this.form.invalid) return;

    this.isLoading = true;
    // simulate API delay
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.form.value);
      // Navigate or show success
    }, 2000);
  }

  navigateToLogin():void {
    this.router.navigate(['/auth/login']);
  }
  navigateToHome():void {
    this.router.navigate(['/home']);
  }

  get f() {
    return this.form.controls;
  }
}
