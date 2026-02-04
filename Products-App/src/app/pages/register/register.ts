import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { matchPasswords, noSpaces, strongPassword } from './register.validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class RegisterComponent {
  submitted = false;
  form! : FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', [Validators.required, noSpaces]],
      password: ['', [Validators.required, strongPassword]],
      confirmPassword: ['', Validators.required],

      // Bonus
      addresses: this.fb.array([]),
    },
    { validators: matchPasswords('password', 'confirmPassword') }
  );
  }


  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        address: ['', Validators.required],
        street: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required],
      })
    );
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    console.log('REGISTER =>', this.form.value);
  }

  c(name: string) {
    return this.form.get(name);
  }

  showError(name: string, error: string) {
    const control = this.c(name);
    return !!control && this.submitted && control.hasError(error);
  }

  get passwordMismatch() {
    return this.submitted && this.form.hasError('passwordMismatch');
  }
}
