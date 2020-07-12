import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonHeaderComponent} from "./pokemon-header/pokemon-header.component";
import {PokemonBodyComponent} from "./pokemon-body/pokemon-body.component";
import {DamageDirective} from "./pokemon-body/damage.directive";
import {ViewDirective} from "./pokemonView.directive";
import { FindFormComponent } from './find-form/find-form.component';

@NgModule({
  declarations: [
    PokemonHeaderComponent,
    PokemonBodyComponent,
    DamageDirective,
    ViewDirective,
    FindFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonHeaderComponent,
    PokemonBodyComponent,
    FindFormComponent
  ],
  bootstrap: [
    PokemonHeaderComponent,
    PokemonBodyComponent,
    FindFormComponent
  ]
})
export class PokemonModule { }
