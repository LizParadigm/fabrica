import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivos-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dispositivos-page.component.html',
  styleUrl: './dispositivos-page.component.css'
})
export class DispositivosPageComponent implements OnInit {
  datos = [
    { dispositivo: 1, trabajador: 'Pepe', microfono: true, localizador: true, estado: true },
    { dispositivo: 2, trabajador: 'Luz', microfono: true, localizador: false, estado: false },
    { dispositivo: 3, trabajador: 'Mauro', microfono: false, localizador: true, estado: false },
    { dispositivo: 4, trabajador: 'Ana', microfono: true, localizador: true, estado: true },
    { dispositivo: 5, trabajador: 'Luis', microfono: false, localizador: false, estado: false }
  ];

  // atributos
  ngOnInit(): void {
  }

  realizarPrueba(dispositivo: number): void {

  }
}
