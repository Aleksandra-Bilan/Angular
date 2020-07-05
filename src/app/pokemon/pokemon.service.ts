import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class pokemonViewState {
  pokemonView: string = 'cardView';

  updateData(newView: string){
    this.pokemonView = newView;
  }

}
