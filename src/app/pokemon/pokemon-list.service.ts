import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor() { }

  getPokemonList(){
    return this.PokemonsArray;
  }

   PokemonsArray: any = [
    {
      "name": "bulbasaur",
      "id": 1,
      "damage": 11,
      'catchState': false,
      "image": '../../../../assets/images/1.png',
      "creationDate": '01.07.2020'
    },
    {
      "name": "ivysaur",
      "id": 2,
      "damage": 25,
      'catchState': false,
      "image": '../../../../assets/images/2.png',
      "creationDate": '02.07.2020'
    },
    {
      "name": "venusaur",
      "id": 3,
      "damage": 60,
      'catchState': false,
      "image": '../../../../assets/images/3.png',
      "creationDate": '03.07.2020'
    },
    {
      "name": "charmander",
      "id": 4,
      "damage": 10,
      'catchState': false,
      "image": '../../../../assets/images/4.png',
      "creationDate": '04.07.2020'
    },
    {
      "name": "charmeleon",
      "id": 5,
      "damage": 50,
      'catchState': false,
      "image": '../../../../assets/images/5.png',
      "creationDate": '05.07.2020'
    },
    {
      "name": "charizard",
      "id": 6,
      "damage": 150,
      'catchState': false,
      "image": '../../../../assets/images/6.png',
      "creationDate": '06.07.2020'
    },
    {
      "name": "squirtle",
      "id": 7,
      "damage": 9,
      'catchState': false,
      "image": '../../../../assets/images/7.png',
      "creationDate": '07.07.2020'
    },
    {
      "name": "wartortle",
      "id": 8,
      "damage": 30,
      'catchState': false,
      "image": '../../../../assets/images/8.png',
      "creationDate": '08.07.2020'
    },
    {
      "name": "blastoise",
      "id": 9,
      "damage": 70,
      'catchState': false,
      "image": '../../../../assets/images/9.png',
      "creationDate": '09.07.2020'
    },
    {
      "name": "caterpie",
      "id": 10,
      "damage": 1,
      'catchState': false,
      "image": '../../../../assets/images/10.png',
      "creationDate": '10.07.2020'
    },
    {
      "name": "metapod",
      "id": 11,
      "damage":30,
      'catchState': false,
      "image": '../../../../assets/images/11.png',
      "creationDate": '11.07.2020'
    },
  ]

}
