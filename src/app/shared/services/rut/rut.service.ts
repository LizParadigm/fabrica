import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RutService {

  constructor(
    private router: Router
  ) { }

  ingresar() {
    this.router.navigateByUrl('/home');
  }

  headerEncabezado(): string {
    switch (this.router.url) {
      case '/home/registrar-usuario':
        return '';
      case '/home/areas':
        return 'Administracion de areas'
      case '/home/zona-hidraulica':
        return 'Zona Hidraulica';
      case '/home/monitoreo-de-decibeles':
        return 'Monitoreo de Decibeles';
      case '/home/monitoreo-de-decibeles/ubicaciones':
        return 'Resumen por Areas';
      case '/home/monitoreo-de-decibeles/entradas':
        return 'Todas las Entradas';
      case '/home/monitoreo-de-decibeles/dispositivos':
        return 'Estado de Dispositivos';
      case '/home/zona-electrica':
        return 'Medidor de Voltaje de Energia Electrica'
      default:
        return 'HiroLabs';
    }
  }

  headerRegister(): boolean {
    if (this.router.url === '/home/registrar-usuario') {
      return true;
    }
    return false;
  }

  enHome(): boolean {
    if (this.router.url === '/home') {
      return true;
    }
    else {
      return false;
    }
  }

  visible(): boolean {
    if (this.router.url === '/home/registrar-usuario') {
      return false;
    }
    else {
      return true;
    }
  }


}
