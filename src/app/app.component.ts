import { Component, Input } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { DECK, LIST } from '../consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() cardView;
  
  constructor() {
    this.cardView = 'deck';
  }
  
  title = 'Choose your fighter';
  
  pokemons = POKEMONS;
  deck = DECK;
  list = LIST;
}
