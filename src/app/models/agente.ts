import { Curso } from './curso';

export interface Agente {
  id: number;
  nombre: string;
  rol: string;
  estado: 'activo' | 'inactivo';
  cursos: Curso[];
}
