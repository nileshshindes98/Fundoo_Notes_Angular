import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent {
  @Output() noteCreated = new EventEmitter<any>();
  isSecondCardOpen: boolean = false;
  // @todo replace with from
  isCreateNoteComponent = true;
  title: string = '';
  description: string = '';
  selectedColor: string = '#fff';

  constructor(
    private _noteService: NoteService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit() {
    const data = {
      title: this.title,
      description: this.description,
      color: this.selectedColor
    };
    if (this.title && this.description) {
      this._noteService.addNotes(data).subscribe((response: any) => {
        if (response.status.success) {
          this._snackBar.open('note created successfully', 'close', {duration: 1500});
          //here we emit the new note data to the parent component
          this.noteCreated.emit(data);
          this.title = ''; // Clear input fields
          this.description = '';
        } else {
          this._snackBar.open('something went wrong', 'close', {duration: 1500});
        }
      });
    }
    this.isSecondCardOpen = !this.isSecondCardOpen;
  }

  setColor(event) {
    this.selectedColor = event;    
  }
}
