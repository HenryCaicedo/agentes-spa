import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgenteService } from '../../services/agente.service';
import { Agente } from '../../models/agente';
import { Modal } from '../../components/modal/modal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-agente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Modal],
  templateUrl: './detalle-agente.html',
})
export class DetalleAgente implements OnInit {
  agente?: Agente;
  modalVisible = false;
  cursoForm!: FormGroup;

  private route = inject(ActivatedRoute);
  private agenteService = inject(AgenteService);
  private fb = inject(FormBuilder);
  private location = inject(Location);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.agente = this.agenteService.getAgenteById(id);

    this.cursoForm = this.fb.group({
      titulo: ['', Validators.required],
      duracion: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d+(h|m)$/)
      ]
      ],
      nivel: ['', Validators.required],
    });
  }

  abrirModal() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
    this.cursoForm.reset();
  }

  agregarCurso() {
    if (!this.agente || this.cursoForm.invalid) return;

    const nuevoCurso = {
      id: Date.now(),
      ...this.cursoForm.value
    };

    this.agente.cursos.push(nuevoCurso);
    this.agenteService.updateAgente(this.agente);
    this.cerrarModal();
  }

  regresar() {
    this.location.back();
  }

}
