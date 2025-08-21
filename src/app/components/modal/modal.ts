import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html'
})
export class Modal {
  @Input() title = '';
  @Input() visible = false;
  @Input() buttons: { label: string, action: () => void }[] = [];
}
