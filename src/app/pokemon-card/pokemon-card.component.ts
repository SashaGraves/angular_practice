import { Component, OnInit, Input } from '@angular/core';
import { CATCH, LET_FREE } from '../../consts';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon;
  @Input() cardView;
  buttonText = CATCH;

  constructor() { }

  ngOnInit(): void {
  }
  
  onButtonClick() {
    if (this.buttonText == CATCH) {
      this.buttonText = LET_FREE;
    } else {
      this.buttonText = CATCH;
    }
  }
}
