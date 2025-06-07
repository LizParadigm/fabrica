import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { MensajeErrorService } from '../../../../shared/services/mensajeError/mensaje-error.service';
import { Router } from '@angular/router';
import { RutService } from '../../../../shared/services/rut/rut.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  // atributos
  errorCorreo: string = '';
  errorContrasena = '';

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private errores: MensajeErrorService,
    private router: Router,
    private route: RutService
  ) {

  }
  ngOnInit(): void {
    this.formulario = this.fb.group({
      correo: ['', [
        Validators.required,
        Validators.email
      ]],
      contrasena: ['', [
        Validators.required
      ]]
    })
  }

  entrar() {
    this.mensajesError();

    if (this.formulario.valid) {
      // falta api
      this.route.ingresar();
    }
  }

  mensajesError() {
    this.errorCorreo = this.errores.iniciarCorreo(this.formulario.get('correo'));
    this.errorContrasena = this.errores.iniciarContrasena(this.formulario.get('contrasena'));
  }

}
