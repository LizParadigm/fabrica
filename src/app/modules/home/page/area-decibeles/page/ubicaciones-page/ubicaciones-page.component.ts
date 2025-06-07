import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicaciones-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ubicaciones-page.component.html',
  styleUrl: './ubicaciones-page.component.css'
})
export class UbicacionesPageComponent implements OnInit {
  // atributos
  datos = [
    { area: 'zona de carga', db: 82.3, peligro: 'medio', proteccion: 'opcional' },
    { area: 'taller de soldadura', db: 95.6, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'almacén principal', db: 68.2, peligro: 'bajo', proteccion: 'no' },
    { area: 'oficina técnica', db: 60.1, peligro: 'bajo', proteccion: 'no' },
    { area: 'planta de ensamblaje', db: 88.9, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'zona de descanso', db: 55.4, peligro: 'bajo', proteccion: 'no' },
    { area: 'línea de producción', db: 77.5, peligro: 'medio', proteccion: 'opcional' },
    { area: 'zona de carga', db: 82.3, peligro: 'medio', proteccion: 'opcional' },
    { area: 'taller de soldadura', db: 95.6, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'almacén principal', db: 68.2, peligro: 'bajo', proteccion: 'no' },
    { area: 'oficina técnica', db: 60.1, peligro: 'bajo', proteccion: 'no' },
    { area: 'planta de ensamblaje', db: 88.9, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'zona de descanso', db: 55.4, peligro: 'bajo', proteccion: 'no' },
    { area: 'línea de producción', db: 77.5, peligro: 'medio', proteccion: 'opcional' },
    { area: 'zona de carga', db: 82.3, peligro: 'medio', proteccion: 'opcional' },
    { area: 'taller de soldadura', db: 95.6, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'almacén principal', db: 68.2, peligro: 'bajo', proteccion: 'no' },
    { area: 'oficina técnica', db: 60.1, peligro: 'bajo', proteccion: 'no' },
    { area: 'planta de ensamblaje', db: 88.9, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'zona de descanso', db: 55.4, peligro: 'bajo', proteccion: 'no' },
    { area: 'línea de producción', db: 77.5, peligro: 'medio', proteccion: 'opcional' },
    { area: 'zona de carga', db: 82.3, peligro: 'medio', proteccion: 'opcional' },
    { area: 'taller de soldadura', db: 95.6, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'almacén principal', db: 68.2, peligro: 'bajo', proteccion: 'no' },
    { area: 'oficina técnica', db: 60.1, peligro: 'bajo', proteccion: 'no' },
    { area: 'planta de ensamblaje', db: 88.9, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'zona de descanso', db: 55.4, peligro: 'bajo', proteccion: 'no' },
    { area: 'línea de producción', db: 77.5, peligro: 'medio', proteccion: 'opcional' },
    { area: 'zona de carga', db: 82.3, peligro: 'medio', proteccion: 'opcional' },
    { area: 'taller de soldadura', db: 95.6, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'almacén principal', db: 68.2, peligro: 'bajo', proteccion: 'no' },
    { area: 'oficina técnica', db: 60.1, peligro: 'bajo', proteccion: 'no' },
    { area: 'planta de ensamblaje', db: 88.9, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'zona de descanso', db: 55.4, peligro: 'bajo', proteccion: 'no' },
    { area: 'línea de producción', db: 77.5, peligro: 'medio', proteccion: 'opcional' },
    { area: 'zona de carga', db: 82.3, peligro: 'medio', proteccion: 'opcional' },
    { area: 'taller de soldadura', db: 95.6, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'almacén principal', db: 68.2, peligro: 'bajo', proteccion: 'no' },
    { area: 'oficina técnica', db: 60.1, peligro: 'bajo', proteccion: 'no' },
    { area: 'planta de ensamblaje', db: 88.9, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'zona de descanso', db: 55.4, peligro: 'bajo', proteccion: 'no' },
    { area: 'línea de producción', db: 77.5, peligro: 'medio', proteccion: 'opcional' },
    { area: 'zona de carga', db: 82.3, peligro: 'medio', proteccion: 'opcional' },
    { area: 'taller de soldadura', db: 95.6, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'almacén principal', db: 68.2, peligro: 'bajo', proteccion: 'no' },
    { area: 'oficina técnica', db: 60.1, peligro: 'bajo', proteccion: 'no' },
    { area: 'planta de ensamblaje', db: 88.9, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'zona de descanso', db: 55.4, peligro: 'bajo', proteccion: 'no' },
    { area: 'línea de producción', db: 77.5, peligro: 'medio', proteccion: 'opcional' },
    { area: 'zona de carga', db: 82.3, peligro: 'medio', proteccion: 'opcional' },
    { area: 'taller de soldadura', db: 95.6, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'almacén principal', db: 68.2, peligro: 'bajo', proteccion: 'no' },
    { area: 'oficina técnica', db: 60.1, peligro: 'bajo', proteccion: 'no' },
    { area: 'planta de ensamblaje', db: 88.9, peligro: 'alto', proteccion: 'obligatorio' },
    { area: 'zona de descanso', db: 55.4, peligro: 'bajo', proteccion: 'no' },
    { area: 'línea de producción', db: 77.5, peligro: 'medio', proteccion: 'opcional' }
  ];




  constructor() {

  }
  ngOnInit(): void {
  }


}
