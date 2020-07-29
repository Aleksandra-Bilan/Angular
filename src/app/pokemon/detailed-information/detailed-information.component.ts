import { Component, OnInit } from '@angular/core';
import { pokemonViewStateService } from "../pokemon.service";
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.less']
})
export class DetailedInformationComponent implements OnInit {
  constructor(private pokemonViewStateService: pokemonViewStateService, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
      this.pokemonId = params['id'];
    });

     this.pokemon = this.pokemonViewStateService.findPokemonById(this.pokemonId);
  }

  private pokemonId: number;
  public pokemon;

  catchPokemon(pokemon, event): void {
    this.pokemonViewStateService.catchPokemon(pokemon, event);
  }

  ngOnInit(): void {
  }

}
