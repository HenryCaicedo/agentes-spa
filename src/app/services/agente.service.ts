import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Agente } from '../models/agente';
import { AGENTES } from '../data/agentes';

@Injectable({ providedIn: 'root' })
export class AgenteService {
  private agentes$ = new BehaviorSubject<Agente[]>(AGENTES);

  getAgentes() {
    return this.agentes$.asObservable();
  }

  getAgenteById(id: number) {
    return this.agentes$.value.find(a => a.id === id);
  }

  addAgente(agente: Agente) {
    this.agentes$.next([...this.agentes$.value, agente]);
  }

  updateAgente(updated: Agente) {
    this.agentes$.next(this.agentes$.value.map(a => a.id === updated.id ? updated : a));
  }

  // Para obtener el listado de cursos
  getCursosDeAgentes() {
    return this.agentes$.value.flatMap(a => a.cursos);
  }

}
