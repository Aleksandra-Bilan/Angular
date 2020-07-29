import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonBodyComponent } from "./pokemon/pokemon-body/pokemon-body.component";
import { DetailedInformationComponent } from "./pokemon/detailed-information/detailed-information.component";

const routes: Routes = [
  { path: '', component: PokemonBodyComponent},
  { path: 'about', component: DetailedInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  queryParams: any;
}
