import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenteService } from '../../services/agente.service';
import { Agente } from '../../models/agente';
import { Toast } from '../../components/toast/toast';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear-agente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Toast],
  templateUrl: './crear-agente.html',
})
export class CrearAgente implements OnInit {
  form!: FormGroup;
  editMode = false;
  agenteId?: number;

  @ViewChild(Toast) toast!: Toast;

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private readonly _agenteService = inject(AgenteService);
  private location = inject(Location);

  ngOnInit(): void {
    // Inicializar formulario
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      rol: ['', Validators.required],
      estado: [false] // checkbox
    });

    // Si viene id en queryParams => editar
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.editMode = true;
        this.agenteId = Number(params['id']);
        const agente = this._agenteService.getAgenteById(this.agenteId);
        if (agente) {
          this.form.patchValue({
            nombre: agente.nombre,
            rol: agente.rol,
            estado: agente.estado === 'activo'
          });
        }
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const formValue = this.form.value;

    const agente: Agente = {
      id: this.editMode && this.agenteId ? this.agenteId : Date.now(),
      nombre: formValue.nombre,
      rol: formValue.rol,
      estado: formValue.estado ? 'activo' : 'inactivo',
      cursos: []
    };

    if (this.editMode) {
      this._agenteService.updateAgente(agente);
      this.toast.show('Agente actualizado con éxito', 'success');
    } else {
      this._agenteService.addAgente(agente);
      this.toast.show('Agente creado con éxito', 'success');
    }

    // Redirigir con delay para mostrar toast
    setTimeout(() => this.router.navigate(['/agentes']), 1000);
  }

  regresar() {
    this.location.back();
  }


}
