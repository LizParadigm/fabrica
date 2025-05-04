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
      default:
        return 'HiroLabs';
    }
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
    if (this.router.url === '/home' || this.router.url === '/home/areas') {
      return true;
    }
    else {
      return false;
    }
  }


}
