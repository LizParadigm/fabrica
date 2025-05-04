import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { MensajeErrorService } from '../../../../shared/services/mensajeError/mensaje-error.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {
  // atributos
  errorNombre: string = "";
  errorApellidoPaterno: string = "";
  errorApellidoMaterno: string = "";
  errorTelefono: string = "";
  errorDomicilio: string = "";
  errorPuesto: string = "";
  errorArea: string = "";
  errorCorreo: string = "";
  errorContrasena: string = "";

  buttonAccesible: boolean = true;

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private errores: MensajeErrorService
  ) {
  };

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/),
        Validators.minLength(3),
      ]],

      apellidoPaterno: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/),
        Validators.minLength(3),
      ]],

      apellidoMaterno: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/),
        Validators.minLength(3),
      ]],

      telefono: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],

      domicilio: ['', [
        Validators.required,
      ]],

      puesto: ['', [
        Validators.required
      ]],

      area: ['', [
        Validators.required
      ]],

      correo: ['', [
        Validators.required,
        Validators.email
      ]],

      contrasena: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  registrar() {
    this.mensajesError();

    if (this.formulario.valid) {
      // falta validacion de correo existente o no y ya se procede a enviar el this.formulario al back con el api

    }
  };


  mensajesError() {
    this.errorNombre = this.errores.registrarNombre(this.formulario.get('nombre'));
    this.errorApellidoPaterno = this.errores.registrarApellido(this.formulario.get('apellidoPaterno'));
    this.errorApellidoMaterno = this.errores.registrarApellido(this.formulario.get('apellidoMaterno'));
    this.errorTelefono = this.errores.registrarTelefono(this.formulario.get('telefono'));
    this.errorDomicilio = this.errores.registrarDomicilio(this.formulario.get('domicilio'));
    this.errorPuesto = this.errores.registrarPuesto(this.formulario.get('puesto'));
    this.errorArea = this.errores.registrarArea(this.formulario.get('area'));
    this.errorCorreo = this.errores.registrarCorreo(this.formulario.get('correo'));
    this.errorContrasena = this.errores.registrarContrasena(this.formulario.get('contrasena'));
  }

  numeros(event: KeyboardEvent): void {
    const char = event.key.charCodeAt(0);
    if (char < 48 || char > 57) {
      event.preventDefault();
    }
  }
}
