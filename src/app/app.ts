import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProfileCard } from './compponents/profile-card/profile-card';

@Component({
  selector: 'app-root',
  //imports: [RouterLink],
  imports: [ProfileCard, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  
}
