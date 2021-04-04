import { Injectable } from '@angular/core';
import { Pokemon } from './components/pokemon.model';
import { POKEMON } from './mock-pokemon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  
  getPokemons(): Observable<Pokemon[]> {
    const pokemons = of(POKEMON)
    return pokemons;
  }
}
