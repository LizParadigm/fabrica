import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pop-ups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop-ups.component.html',
  styleUrl: './pop-ups.component.css'
})
export class PopUpsComponent {
  @Output() cerrar = new EventEmitter<void>();
  @Input() mensaje!: [mensaje: string, error: boolean];

  cerrarVentana() {
    this.cerrar.emit();
  }

}
