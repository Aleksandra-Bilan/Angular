import {Component, Input, OnInit, Output} from '@angular/core';
import { pokemonViewStateService } from "../pokemon.service";

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.less'],
  providers: [pokemonViewStateService]
})
export class PokemonHeaderComponent implements OnInit {

  constructor(private pokemonViewStateService: pokemonViewStateService) {
  }

  changeView(): void {
    this.pokemonViewStateService.changeView();
  }

  ngOnInit(): void {
  }

}
