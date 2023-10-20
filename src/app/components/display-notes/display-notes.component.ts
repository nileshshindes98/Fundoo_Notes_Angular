import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss'],
})
export class DisplayNotesComponent {
  isSecondCardOpen: boolean = false;
  @Input() allNotes: any = [];

  constructor() {}
}
