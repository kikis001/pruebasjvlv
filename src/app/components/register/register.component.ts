import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      nameTeam: new FormControl('', [Validators.required])
    })
  }

  hide = true

  onSubmit() {
    const form = this.registerForm;
    if(form.invalid) {
      return;
    }
    this.authService.registerUser(form.value).subscribe((res) => {
      alert('Credo con éxito. !Ahora ingresa!')
      this.router.navigate(['login'])
    },
    (err) => {
      alert('El usuario ya existe')
    })
  }

  goLogin() {
    this.router.navigate(['login'])
  }

}
