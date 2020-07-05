import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonHeaderComponent} from "./pokemon-header/pokemon-header.component";
import {PokemonBodyComponent} from "./pokemon-body/pokemon-body.component";
import {DamageDirective} from "./pokemon-body/damage.directive";
import {ViewDirective} from "./pokemonView.directive";

@NgModule({
  declarations: [
    PokemonHeaderComponent,
    PokemonBodyComponent,
    DamageDirective,
    ViewDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonHeaderComponent,
    PokemonBodyComponent
  ],
  bootstrap: [
    PokemonHeaderComponent,
    PokemonBodyComponent
  ]
})
export class PokemonModule { }
