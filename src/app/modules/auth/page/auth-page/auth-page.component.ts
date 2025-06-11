import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { MensajeErrorService } from '../../../../shared/services/mensajeError/mensaje-error.service';
import { Router } from '@angular/router';
import { RutService } from '../../../../shared/services/rut/rut.service';
import { ApiService } from '../../../../shared/services/api/api.service';
import { TokenPayload } from '../../../../core/models/tokenPayLoad.model';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  // atributos
  errorUsername: string = '';
  errorContrasena = '';

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private errores: MensajeErrorService,
    private router: Router,
    private route: RutService
  ) {

  }
  ngOnInit(): void {
    this.formulario = this.fb.group({
      username: ['', [
        Validators.required,
        // Validators.email
      ]],
      contrasena: ['', [
        Validators.required
      ]]
    })
  }

  entrar() {
    this.mensajesError();

    if (this.formulario.valid) {

      this.apiService.login(this.formulario.get('username')?.value, this.formulario.get('contrasena')?.value).subscribe({
        next: res => {
          console.log('Login correcto', res);
          const decoded = jwtDecode<TokenPayload>(res.access);

          // Guardar rol según user_id
          if (decoded.user_id === 1) {
            localStorage.setItem('role', 'superuser');
          } else {
            localStorage.setItem('role', 'normal');
          }

          this.route.ingresar();
        },
        error: err => {
          console.error('Error en login', err);
          this.errorUsername = 'Credenciales incorrectas o servidor no disponible.';
        }
      });
    }
  }

  mensajesError() {
    this.errorUsername = this.errores.registrarNombre(this.formulario.get('username'));
    this.errorContrasena = this.errores.iniciarContrasena(this.formulario.get('contrasena'));
  }

}
