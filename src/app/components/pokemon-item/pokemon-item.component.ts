import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../../pokemon.service';
@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit{
  @Input() collection;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private pokemonService: PokemonService) {};
  
  pokemon: Pokemon = {
    id: 1,
    name: 'New pokemon',
  }
  
  selectedPokemon?: Pokemon;
  
  pokemons: Pokemon[] = [];
  
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  ngOnInit(): void {
    this.getPokemons();
  }
  
  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
}
