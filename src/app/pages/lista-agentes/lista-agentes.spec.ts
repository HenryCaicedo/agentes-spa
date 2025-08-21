import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgentes } from './lista-agentes';

describe('ListaAgentes', () => {
  let component: ListaAgentes;
  let fixture: ComponentFixture<ListaAgentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAgentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAgentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
