import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  regexNumero = /^[0-9]+$/;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
    })
  }

  ngOnInit(): void {
  }

  guardarlogin() {
    const loginGuardar: Login = {
      correo: this.loginForm.get('correo')?.value,
      nombre: this.loginForm.get('nombre')?.value,
      edad: this.loginForm.get('edad')?.value
    }
    console.log(loginGuardar)
  }
}
