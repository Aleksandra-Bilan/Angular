import {Directive, HostBinding} from '@angular/core';
import {pokemonViewState} from "./pokemon.service";

@Directive({
  selector: '[pokemonView]'
})
export class ViewDirective{

  viewState: string;

  @HostBinding('id')
  elementId = this.viewState;

  constructor(private state: pokemonViewState) {
    this.viewState = state.pokemonView;
  }



}
