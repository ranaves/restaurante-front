import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesListaComponent } from './restaurantes-lista.component';

describe('RestaurantesListaComponent', () => {
  let component: RestaurantesListaComponent;
  let fixture: ComponentFixture<RestaurantesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
