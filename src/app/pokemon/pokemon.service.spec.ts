import { TestBed } from '@angular/core/testing';
import {pokemonViewStateService} from "./pokemon.service";

describe('pokemonViewStateService', () => {
  let service: pokemonViewStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pokemonViewStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAllPokemon should return real value', () => {
    expect(service.getAllPokemon).toBe('real value');
  });
});
