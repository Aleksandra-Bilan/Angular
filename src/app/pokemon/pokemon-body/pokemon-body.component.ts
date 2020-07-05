import { Component, OnInit } from '@angular/core';
import { PokemonsArray } from './pokemon-array'
import {pokemonViewState} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.less']
})
export class PokemonBodyComponent implements OnInit {
  pokemonArray = PokemonsArray;

  constructor() {
  }

  catchPokemon(pokemon, event){
    pokemon.catchState = !pokemon.catchState;
    if(pokemon.catchState){
      console.log(`Покемон ${pokemon.name} был пойман`);
      event.target.innerHTML = 'Отпустить';
    } else {
      console.log(`Покемон ${pokemon.name} был отпущен`);
      event.target.innerHTML = 'Поймать';
    }
  }

  ngOnInit(): void {
  }
}
