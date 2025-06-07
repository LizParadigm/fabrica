import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entradas-page.component.html',
  styleUrl: './entradas-page.component.css'
})
export class EntradasPageComponent implements OnInit {
  // atributos
  datos = [
    { trabajador: 'Carlos Ruiz', ubicacion: 'Zona de carga', db: 83.2, dbPromedioUbicacion: 82.3, estado: 'seguro' },
    { trabajador: 'Laura Méndez', ubicacion: 'Taller de soldadura', db: 97.1, dbPromedioUbicacion: 95.6, estado: 'alerta' },
    { trabajador: 'Pedro Sánchez', ubicacion: 'Oficina técnica', db: 59.8, dbPromedioUbicacion: 60.1, estado: 'seguro' },
    { trabajador: 'Ana Torres', ubicacion: 'Zona de descanso', db: 56.0, dbPromedioUbicacion: 55.4, estado: 'seguro' },
    { trabajador: 'Marcos Díaz', ubicacion: 'Planta de ensamblaje', db: 90.4, dbPromedioUbicacion: 88.9, estado: 'seguro' }
  ];

  ngOnInit(): void {
  }

}
