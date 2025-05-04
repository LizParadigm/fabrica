import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RutService } from '../../services/rut/rut.service';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  // atributos
  encabezado!: string;

  constructor(
    private router: Router,
    public rut: RutService,
    private localizacion: Location
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.encabezado = this.rut.headerEncabezado();
      }
    });
  }

  ngOnInit(): void {
    // s
  }

  atras() {
    this.localizacion.back();
  };

  cerrarsesion() {
    this.router.navigateByUrl('/iniciar-sesion')
  };
}
