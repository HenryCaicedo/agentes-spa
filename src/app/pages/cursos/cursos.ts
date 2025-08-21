import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenteService } from '../../services/agente.service';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.html',
})
export class Cursos implements OnInit {
  cursos: Curso[] = [];

  private readonly _agenteService = inject(AgenteService);

  constructor() {}

  ngOnInit(): void {
    this.cursos = this._agenteService.getCursosDeAgentes();
  }
}
