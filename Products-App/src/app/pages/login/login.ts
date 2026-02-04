import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  submitted = false;

  model = {
    email: '',
    password: '',
  };

  emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.invalid) return;

    console.log('LOGIN =>', this.model);
  }
}
