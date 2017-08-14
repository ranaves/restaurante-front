import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoDetalheComponent } from './prato-detalhe.component';

describe('PratoDetalheComponent', () => {
  let component: PratoDetalheComponent;
  let fixture: ComponentFixture<PratoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
