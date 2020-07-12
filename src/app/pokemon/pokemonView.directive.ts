import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[pokemonView]'
})
export class ViewDirective{

  constructor() {
  }

  @HostBinding('id')
  elementId = 'cardView';

}
