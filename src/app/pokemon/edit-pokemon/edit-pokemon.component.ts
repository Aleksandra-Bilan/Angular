import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { pokemonViewStateService } from "../pokemon.service";
import {ComponentCanDeactivate} from "../../exit.about.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.less']
})
export class EditPokemonComponent implements ComponentCanDeactivate {

  constructor(private pokemonViewStateService: pokemonViewStateService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.pokemonId = params['id'];
    });
  }
  public pokemonId: number;

  saved: boolean = false;
  save(){
    this.saved = true;
  }

  canDeactivate() : boolean | Observable<boolean>{

    if(!this.saved){
      return confirm("Вы хотите покинуть страницу?");
    }
    else{
      return true;
    }
  }

  private dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
  private damage = /^\d+$/;
  private name = /^[a-zA-Zа-яА-я ]+$/;


  changePokemonData(name, damage, date){
    let error = false;
    if(!this.dateReg.test(date) && date){
      error = true;
      console.log('Введите дату в формате 00-00-2000');
    }
    if(!this.damage.test(damage) && damage){
      error = true;
      console.log('Только цифры');
    }
    if(!this.name.test(name) && name){
      error = true;
      console.log('Только латиница и киррилица');
    }

    if(!name && !damage && !date){
      error = true;
      console.log('Заполните хотя бы одно поле');
    }

    if(!error){
      this.save();
      this.pokemonViewStateService.changePokemonData(this.pokemonId, name, damage, date);
      alert('Данные были изменены!');
      this.router.navigate(['about'],  { queryParams: { id: this.pokemonId } }).then(r => {console.log(r)} );
    }
  }
}
