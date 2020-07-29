import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokemonModule } from "./pokemon/pokemon.module";
import { AppRoutingModule } from "./app-routing.module";
import { FilterPipe } from "./pokemon/Pipes/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
