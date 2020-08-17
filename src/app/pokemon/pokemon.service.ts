import {Injectable, Input, Output} from "@angular/core";
import {PokemonListService} from "./pokemon-list.service";

@Injectable({ providedIn: 'root' })
export class pokemonViewStateService {

  constructor(private pokemonList: PokemonListService) { }

  private pokemonsArray = this.getAllPokemon();

  @Input() public pokemons = this.pokemonsArray;

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
      event.target.innerHTML = 'Let`s go';
    } else {
      console.log(`Покемон ${pokemon.name} был отпущен`);
      event.target.innerHTML = 'Catch';
    }
  }

  findPokemonByName(name){
    this.pokemons = this.pokemonsArray.filter(pokemon => pokemon.name.toLocaleLowerCase() === name.toLocaleLowerCase());
  }
  findPokemonById(id){
    return this.pokemonsArray.filter(pokemon => pokemon.id === Number(id));
  }
  getAllPokemon(){
    this.pokemons = this.pokemonList.getPokemonList();
    return this.pokemonList.getPokemonList();
  }

  changePokemonData(id, name?, damage?, date?) {
    this.pokemons = this.pokemonList.changePokemon(id, name, damage, date);
  }
}
