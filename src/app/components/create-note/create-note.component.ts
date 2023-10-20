import { Component, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent {
  isSecondCardOpen: boolean = false;
  title: string = '';
  description: string = '';

  constructor(private note: NoteService) {}

  @Output() noteCreated = new EventEmitter<any>();

  onSubmit() {
    let data = {
      title: this.title,
      description: this.description,
    };
    if (this.title && this.description) {
      this.note.addNotes(data).subscribe((response: any) => {
        console.log(response);
        let message = 'note created successfully';
        console.log(message);
        //here we emit the new note data to the parent component
        this.noteCreated.emit(data); 
        this.title = ''; // Clear input fields
        this.description = '';
        this.isSecondCardOpen = !this.isSecondCardOpen;
      });
    }
  }

  onButtonClick() {
    this.onSubmit();
    this.isSecondCardOpen = !this.isSecondCardOpen;
  }
}
