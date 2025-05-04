import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MensajeErrorService {

  constructor() { }

  // registrar-page
  registrarNombre(nombre: AbstractControl | null): string {
    if (!nombre) return '';


    if (nombre.hasError('required')) {
      return 'Campo necesario.';
    }
    else if (nombre.hasError('pattern')) {
      return 'Solo se permiten letras.';
    }
    else if (nombre.hasError('minlength')) {
      return 'Debe tener mas de 3 letras.';
    }
    else {
      return '';
    }
  }

  registrarApellido(apellido: AbstractControl | null): string {
    if (!apellido) return '';

    if (apellido.hasError('required')) {
      return 'Campo necesario.';
    }
    else if (apellido.hasError('pattern')) {
      return 'Solo se permiten letras.';
    }
    else if (apellido.hasError('minlength')) {
      return 'Debe tener mas de 3 letras.';
    } else {
      return '';
    }
  }

  registrarTelefono(telefono: AbstractControl | null): string {
    if (!telefono) return '';
    if (telefono.hasError('required')) {
      return 'Campo necesario.';
    }
    else if (telefono.hasError('minlength') || telefono.hasError('maxlength')) {
      return 'Debe tener 10 numeros.';
    }
    else {
      return '';
    }
  }

  registrarDomicilio(domicilio: AbstractControl | null): string {
    if (!domicilio) return '';
    if (domicilio.hasError('required')) {
      return 'Campo necesario.';
    }

    return '';
  }

  registrarPuesto(puesto: AbstractControl | null): string {
    if (!puesto) return '';

    if (puesto.hasError('required')) {
      return 'Campo necesario.';
    }

    return '';
  }

  registrarArea(area: AbstractControl | null): string {
    if (!area) return '';

    if (area.hasError('required')) {
      return 'Campo necesario.';
    }

    return '';
  }

  registrarCorreo(correo: AbstractControl | null): string {
    if (!correo) return '';

    if (correo.hasError('required')) {
      return 'Campo necesario.';
    }
    else if (correo.hasError('email')) {
      return 'Correo invalido.';
    }
    // else if (existe){            si esta o no disponible el correo
    //   return 'Alguien ya registro ese correo.';
    // }

    return '';
  }

  registrarContrasena(contrasena: AbstractControl | null): string {
    if (!contrasena) return '';

    if (contrasena.hasError('required')) {
      return 'Campo necesario.';
    }
    else if (contrasena.hasError('minlength')) {
      return 'Debe tener mas de 8 caracteres.';
    }
    else {
      return '';
    }
  }

  // iniciar sesion
  iniciarCorreo(correo: AbstractControl | null): string {
    if (!correo) return '';

    if (correo.hasError('required')) {
      return 'Campo necesario.';
    }
    else if (correo.hasError('email')) {
      return 'Correo invalido.';
    }
    else {
      return '';
    }
  }

  iniciarContrasena(contrasena: AbstractControl | null): string {
    if (!contrasena) return '';

    if (contrasena.hasError('required')) {
      return 'Campo necesario.';
    }
    else {
      return '';
    }
  }
}
