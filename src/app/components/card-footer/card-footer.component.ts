import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent {
  @Output() onClose = new EventEmitter;
  @Input() from;

  onButtonClick() {
    this.onClose.emit(true);
  }

  constructor() {}
}
