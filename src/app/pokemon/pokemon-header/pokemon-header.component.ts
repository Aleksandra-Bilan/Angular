import {Component, Input, OnInit, Output} from '@angular/core';
import { pokemonViewState } from "../pokemon.service";

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.less'],
  providers: [pokemonViewState]
})
export class PokemonHeaderComponent implements OnInit {

  viewState: string;

  constructor(private state: pokemonViewState) {
    this.viewState = state.pokemonView;
  }
  updateView(newView: string){
    this.state.updateData(newView);
  }
    ngOnInit(): void {
  }

}
