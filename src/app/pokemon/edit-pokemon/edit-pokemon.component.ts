import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { pokemonViewStateService } from "../pokemon.service";

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.less']
})
export class EditPokemonComponent implements OnInit {

  constructor(private pokemonViewStateService: pokemonViewStateService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.pokemonId = params['id'];
    });
  }
  public pokemonId: number;

  ngOnInit(): void {
  }

  private dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
  private damage = /^\d+$/;
  private name = /^[a-zA-Z]+$/;


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
      console.log('Только латиница');
    }

    if(!name && !damage && !date){
      error = true;
      console.log('Заполните хотя бы одно поле');
    }

    if(!error){
      this.pokemonViewStateService.changePokemonData(this.pokemonId, name, damage, date);
      this.router.navigate(['about'],  { queryParams: { id: this.pokemonId } }).then(r => {console.log(r)} );
    }
  }
}
