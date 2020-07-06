import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class pokemonViewStateService {

  elements: any;

  changeView(): void{
    this.elements = document.getElementById('cardView');
    if(this.elements.classList.contains('tableView')){
      this.elements.classList.remove('tableView');
    }else{
      this.elements.classList.add('tableView');
    }
  }

}
