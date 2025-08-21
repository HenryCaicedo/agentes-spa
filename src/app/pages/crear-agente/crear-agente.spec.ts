import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAgente } from './crear-agente';

describe('CrearAgente', () => {
  let component: CrearAgente;
  let fixture: ComponentFixture<CrearAgente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAgente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAgente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
