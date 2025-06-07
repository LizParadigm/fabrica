import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css'
})
export class PrincipalPageComponent implements OnInit {
  datos = [
    { id: '1', nombre: 'Maquina', contenido: '50%', estado: 'Critico' },
    { id: 'CG16', nombre: 'Cisterna Chica', contenido: '87%', estado: 'Estable' },
    { id: 'CC47', nombre: 'Cisterna Grande', contenido: '25%', estado: 'Inestable' },
    { id: 'CG14', nombre: 'Cisterna Grande', contenido: '30%', estado: 'Inestable' }
  ];

  desplegar: boolean[] = [];
  ngOnInit(): void {
    this.desplegar = this.datos.map(() => false);
  }

  desplegarMenu(index: number): void {
    this.desplegar = this.desplegar.map((open, i) => i === index ? !open : false);
  }

  abrir(id: string): void {
    // se manda al servidor
  }

  cerrar(id: string): void {
    // se manda al servidor
  }
  notificar(id: string): void {
    // se manda al servidor
  }
}
