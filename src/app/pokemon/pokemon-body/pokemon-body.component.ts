import { Component } from '@angular/core';
import { pokemonViewStateService } from "../pokemon.service";
import { ActivatedRoute  } from '@angular/router';

interface DoCheck {
  ngDoCheck(): void
}

@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.less']
})
export class PokemonBodyComponent implements DoCheck {

  pokemonArray = this.pokemonViewStateService.pokemons;

  private pokemonId: number;

  constructor(private pokemonViewStateService: pokemonViewStateService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.pokemonId = params['id'];
    });

    if(this.pokemonId){
      this.findPokemonById(this.pokemonId);
    }
  }

  ngDoCheck(){
    this.pokemonArray = this.pokemonViewStateService.pokemons;
  }

  catchPokemon(pokemon, event): void {
    this.pokemonViewStateService.catchPokemon(pokemon, event);
  }

  findPokemonByName(name){
    this.pokemonArray = this.pokemonViewStateService.findPokemonByName(name);
  }

  findPokemonById(id){
    this.pokemonArray = this.pokemonViewStateService.findPokemonById(id);
  }

  ngOnInit(): void {
  }
}
