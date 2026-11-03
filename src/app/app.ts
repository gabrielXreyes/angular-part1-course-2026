import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { Navbar } from './components/shared/navbar/navbar';
@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('Gabriel Reyes Leal');
  prueba1= 'Hola mundo';
}
