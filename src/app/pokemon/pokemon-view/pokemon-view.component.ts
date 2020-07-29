import { Component, OnInit } from '@angular/core';
import { pokemonViewStateService } from "../pokemon.service";

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.less'],
  providers: [pokemonViewStateService]
})
export class PokemonViewComponent implements OnInit {
  constructor(private pokemonViewStateService: pokemonViewStateService) {
  }

  changeView(): void {
    this.pokemonViewStateService.changeView();
  }


  ngOnInit(): void {
  }

}
