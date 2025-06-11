import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { MensajeErrorService } from '../../../../shared/services/mensajeError/mensaje-error.service';
import { CommonModule } from '@angular/common';
import { PopUpsComponent } from './components/pop-ups/pop-ups.component';
import { Empleado } from '../../../../core/models/registrarUsuario.model';
import { ApiService } from '../../../../shared/services/api/api.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PopUpsComponent
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

  cargarModal: boolean = false;
  modalMensaje!: [string, boolean];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private errores: MensajeErrorService
  ) {
  };

  ngOnInit(): void {
    this.formulario = this.fb.group({
      username: ['', [
        Validators.required
      ]],
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
      this.registrando();
      // falta validacion de correo existente o no y ya se procede a enviar el this.formulario al back con el api
    }
    else {
      this.abrirModal('error al registrar', true);
    }
  };


  mensajesError(): void {
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
  bloquearEspacio(event: KeyboardEvent): void {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }


  abrirModal(mensaje: string, correcto: boolean): void {
    this.cargarModal = true;
    this.modalMensaje = [mensaje, correcto];

  }

  cerrarModal(): void {
    this.cargarModal = false;
  }

  registrando(): void {
    const datos: Empleado = {
      user: {
        username: this.formulario.get('username')?.value,
        password: this.formulario.get('contrasena')?.value,
        email: this.formulario.get('correo')?.value,
      },
      nombre: this.formulario.get('nombre')?.value,
      apellido_pat: this.formulario.get('apellidoPaterno')?.value,
      apellido_mat: this.formulario.get('apellidoMaterno')?.value,
      telefono: this.formulario.get('telefono')?.value,
      direccion: this.formulario.get('domicilio')?.value,
      puesto: this.formulario.get('puesto')?.value,
      area: this.formulario.get('area')?.value
    }
    console.log('datos: ', datos)
    console.log('formulario', this.formulario.value)

    this.apiService.crearEmpleado(datos).subscribe({
      next: res => {
        this.abrirModal('Usuario Registrado', false);
      },
      error: err => {
        console.error('err', err);
        console.error('err.error', err.error);
        console.error('err.mensaje', err.mensaje);
        console.error('Mensaje del backend:', JSON.stringify(err.error, null, 2));
        this.abrirModal('error al registrar', true);
      }
    });
    console.log(datos)

  }
}

