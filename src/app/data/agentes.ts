import { Agente } from '../models/agente';

export const AGENTES: Agente[] = [
  {
    id: 1,
    nombre: 'Agente Alpha',
    rol: 'Supervisor',
    estado: 'activo',
    cursos: [
      { id: 101, titulo: 'Curso Angular', duracion: '10h', nivel: 'Intermedio' }
    ]
  },
  {
    id: 2,
    nombre: 'Agente Beta',
    rol: 'Analista',
    estado: 'inactivo',
    cursos: []
  },
  {
    id: 3,
    nombre: 'Agente Gamma',
    rol: 'Operador',
    estado: 'activo',
    cursos: [
      { id: 102, titulo: 'Curso React', duracion: '8h', nivel: 'Básico' }
    ]
  },
  {
    id: 4,
    nombre: 'Agente Delta',
    rol: 'Supervisor',
    estado: 'activo',
    cursos: [
      { id: 103, titulo: 'Curso Node.js', duracion: '12h', nivel: 'Avanzado' }
    ]
  },
  {
    id: 5,
    nombre: 'Agente Epsilon',
    rol: 'Analista',
    estado: 'inactivo',
    cursos: []
  },
  {
    id: 6,
    nombre: 'Agente Zeta',
    rol: 'Operador',
    estado: 'activo',
    cursos: [
      { id: 104, titulo: 'Curso TypeScript', duracion: '6h', nivel: 'Intermedio' }
    ]
  },
  {
    id: 7,
    nombre: 'Agente Eta',
    rol: 'Supervisor',
    estado: 'activo',
    cursos: [
      { id: 105, titulo: 'Curso Seguridad', duracion: '9h', nivel: 'Básico' }
    ]
  }
];
