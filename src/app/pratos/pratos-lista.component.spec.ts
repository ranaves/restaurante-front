import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosListaComponent } from './pratos-lista.component';

describe('PratosListaComponent', () => {
  let component: PratosListaComponent;
  let fixture: ComponentFixture<PratosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
