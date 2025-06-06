import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-areas-page',
  standalone: true,
  imports: [],
  templateUrl: './areas-page.component.html',
  styleUrl: './areas-page.component.css'
})
export class AreasPageComponent implements OnInit {
  // atributos

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  registrar() {
    this.router.navigateByUrl('home/registrar-usuario');
  }
  areaHidraulica(): void {
    this.router.navigateByUrl('home/zona-hidraulica');
  }

  areaDecibeles(): void {
    this.router.navigateByUrl('home/monitoreo-de-decibeles');
  }

  areaElectrica(): void {
    this.router.navigateByUrl('home/zona-electrica');
  }

  areaAire(): void {
    this.router.navigateByUrl('home/calidad-del-aire');
  }

}
