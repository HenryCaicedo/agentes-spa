import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgenteService } from '../../services/agente.service';
import { Agente } from '../../models/agente';

@Component({
  selector: 'app-lista-agentes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-agentes.html'
})
export class ListaAgentes implements OnInit {
  agentes: Agente[] = [];
  agentesFiltrados: Agente[] = [];
  searchTerm = '';

  private readonly _agenteService = inject(AgenteService);

  ngOnInit() {
    this._agenteService.getAgentes().subscribe(data => {
      this.agentes = data;
      this.agentesFiltrados = data;
    });
  }

  filtrarAgentes() {
    const term = this.searchTerm.toLowerCase();

    if (term === 'activo') {
      this.agentesFiltrados = this.agentes.filter(a => a.estado === 'activo');
      return;
    }

    this.agentesFiltrados = this.agentes.filter(a =>
      a.nombre.toLowerCase().includes(term) ||
      a.rol.toLowerCase().includes(term) ||
      a.estado.toLowerCase().includes(term) ||
      a.cursos.length.toString().includes(term)
    );
  }
  
}
