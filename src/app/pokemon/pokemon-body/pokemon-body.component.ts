import { Component, OnInit } from '@angular/core';
import {pokemonViewStateService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.less']
})
export class PokemonBodyComponent implements OnInit {
  pokemonArray = this.pokemonViewStateService.getAllPokemon();

  constructor(private pokemonViewStateService: pokemonViewStateService) {
  }

  catchPokemon(pokemon, event): void {
    this.pokemonViewStateService.catchPokemon(pokemon, event);
  }

  findPokemonByName(name){
    this.pokemonArray = this.pokemonViewStateService.findPokemonByName(name);
  }

  findPokemonById(id){
    this.pokemonArray = this.pokemonViewStateService.findPokemonByName(id);
  }

  ngOnInit(): void {
  }
}
