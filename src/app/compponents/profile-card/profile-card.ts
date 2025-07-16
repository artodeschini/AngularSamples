import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [FormsModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss'
})
export class ProfileCard {

  name: string = 'Artur Todeschini Crestani';
  age: number = 48;
  description: string = 'A passionate developer learning Angular';

}
