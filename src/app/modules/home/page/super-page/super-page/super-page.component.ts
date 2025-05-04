import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-page',
  standalone: true,
  imports: [],
  templateUrl: './super-page.component.html',
  styleUrl: './super-page.component.css'
})
export class SuperPageComponent implements OnInit {
  // atributos

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  registrar() {
    this.router.navigateByUrl('home/registrar-usuario');
  }

  verAreas() {
    this.router.navigateByUrl('home/areas');
  }

}
