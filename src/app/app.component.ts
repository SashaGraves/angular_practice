import { Component } from '@angular/core';
import { POKEMONS } from './mock-pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choose your fighter';
  
  pokemons = POKEMONS;
  
  onSwitch() {
    
  }
}
