import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHeaderComponent } from './pokemon-header.component';

describe('PokemonHeaderComponent', () => {
  let component: PokemonHeaderComponent;
  let fixture: ComponentFixture<PokemonHeaderComponent>;
  let h1:        HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonHeaderComponent ]
    })
    .compileComponents();
    h1 = fixture.nativeElement.querySelector('h1');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    expect(h1.textContent).toContain(component.title);
  });
});
