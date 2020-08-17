import {Component, OnInit} from '@angular/core';
import { pokemonViewStateService } from "../pokemon.service";

@Component({
  selector: 'app-find-form',
  templateUrl: './find-form.component.html',
  styleUrls: ['./find-form.component.less']
})
export class FindFormComponent implements OnInit {

  constructor(private pokemonViewStateService: pokemonViewStateService) { }

  ngOnInit(): void {
  }

  findPokemon(value) {
    this.pokemonViewStateService.findPokemonByName(value);
  }

  showAllPokemons(){
    this.pokemonViewStateService.getAllPokemon();
  }
}
