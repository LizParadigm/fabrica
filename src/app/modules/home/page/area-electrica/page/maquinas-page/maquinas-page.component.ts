import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maquinas-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maquinas-page.component.html',
  styleUrl: './maquinas-page.component.css'
})
export class MaquinasPageComponent implements OnInit {
  datos = [
    { id: 1, voltajePromedio: '1401 V', estado: 'Normal', date: "2025-05-04", time: "17:29:10" },
    { id: 2, voltajePromedio: '1401 V', estado: 'Normal', date: "2025-05-04", time: "17:29:10" },
    { id: 3, voltajePromedio: '895 V', estado: 'Alerta', date: "2025-05-04", time: "17:29:10" },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  detalles(id: number): void {
    this.router.navigateByUrl('home/zona-electrica/detalles');

  }

}
