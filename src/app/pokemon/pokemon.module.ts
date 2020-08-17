import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonHeaderComponent} from "./pokemon-header/pokemon-header.component";
import {PokemonBodyComponent} from "./pokemon-body/pokemon-body.component";
import {DamageDirective} from "./pokemon-body/damage.directive";
import {ViewDirective} from "./pokemonView.directive";
import { FindFormComponent } from './find-form/find-form.component';
import { DetailedInformationComponent } from './detailed-information/detailed-information.component';
import {AppRoutingModule} from "../app-routing.module";
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import {FormsModule} from "@angular/forms";
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

@NgModule({
  declarations: [
    PokemonHeaderComponent,
    DetailedInformationComponent,
    PokemonBodyComponent,
    DamageDirective,
    ViewDirective,
    FindFormComponent,
    PokemonViewComponent,
    EditPokemonComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    PokemonHeaderComponent,
    PokemonBodyComponent,
    FindFormComponent,
    DetailedInformationComponent
  ],
  bootstrap: [
    PokemonHeaderComponent,
    PokemonBodyComponent,
    FindFormComponent,
    DetailedInformationComponent
  ]
})
export class PokemonModule { }
