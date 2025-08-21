import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html'
})
export class Toast {
  @Input() message = '';
  @Input() type: 'success' | 'error' = 'success';
  visible = false;

  show(message: string, type: 'success' | 'error' = 'success', duration = 3000) {
    this.message = message;
    this.type = type;
    this.visible = true;
    setTimeout(() => this.visible = false, duration);
  }
}
