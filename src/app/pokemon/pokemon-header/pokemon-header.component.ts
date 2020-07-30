import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.less']
})
export class PokemonHeaderComponent implements OnInit {

  public title: string = "Welcome to the Pokemon web-site!";
  constructor() {
  }

  ngOnInit(): void {
  }

}
