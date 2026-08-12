import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent],
  template: `
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.scss',
})
export class App {}
