import {Injectable} from "@angular/core";
import {PokemonListService} from "./pokemon-list.service";

@Injectable({ providedIn: 'root' })
export class pokemonViewStateService {

  constructor(private pokemonList: PokemonListService) { }

  private pokemonsArray = this.getAllPokemon();

  elements: any;

  changeView(): void{
    this.elements = document.getElementById('cardView');
    if(this.elements.classList.contains('tableView')){
      this.elements.classList.remove('tableView');
    }else{
      this.elements.classList.add('tableView');
    }
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

  findPokemonByName(name){
    return this.pokemonsArray.filter(pokemon => pokemon.name === name);
  }
  findPokemonById(id){
    return this.pokemonsArray.filter(pokemon => pokemon.id === id);
  }
  getAllPokemon(){
    return this.pokemonList.getPokemonList();
  }


}
