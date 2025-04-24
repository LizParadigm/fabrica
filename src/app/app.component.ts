import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthPageComponent } from "./modules/auth/page/auth-page/auth-page.component";
import { RegisterPageComponent } from './modules/auth/page/register-page/register-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthPageComponent, RegisterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fabrica';
}
