import { Routes } from '@angular/router';
import { ListaAgentes } from './pages/lista-agentes/lista-agentes';
import { DetalleAgente } from './pages/detalle-agente/detalle-agente';
import { CrearAgente } from './pages/crear-agente/crear-agente';
import { Cursos } from './pages/cursos/cursos';

export const routes: Routes = [
  { path: '', redirectTo: 'agentes', pathMatch: 'full' },
  { path: 'agentes', component: ListaAgentes },
  { path: 'agentes/:id', component: DetalleAgente },
  { path: 'crear', component: CrearAgente },
  { path: 'cursos', component: Cursos }
];
