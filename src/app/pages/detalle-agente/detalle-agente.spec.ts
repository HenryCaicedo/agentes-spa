import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAgente } from './detalle-agente';

describe('DetalleAgente', () => {
  let component: DetalleAgente;
  let fixture: ComponentFixture<DetalleAgente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAgente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAgente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
