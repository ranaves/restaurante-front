import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteDetalheComponent } from './restaurante-detalhe.component';

describe('RestauranteDetalheComponent', () => {
  let component: RestauranteDetalheComponent;
  let fixture: ComponentFixture<RestauranteDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
