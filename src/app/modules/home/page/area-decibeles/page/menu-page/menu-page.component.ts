import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponentimplements implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  resumen(): void {
    this.router.navigateByUrl('home/monitoreo-de-decibeles/ubicaciones');
  }

  entradas(): void {
    this.router.navigateByUrl('home/monitoreo-de-decibeles/entradas');
  }

  estados(): void {
    this.router.navigateByUrl('home/monitoreo-de-decibeles/dispositivos');
  }

}