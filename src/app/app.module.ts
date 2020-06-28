import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Pokemon }   from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ Pokemon ],
    bootstrap:    [ Pokemon ]
})
export class AppModule { }