import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokemonModule } from "./pokemon/pokemon.module";
import { AppRoutingModule } from "./app-routing.module";
import { ExitAboutGuard } from "./exit.about.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule
  ],
  providers: [ExitAboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
