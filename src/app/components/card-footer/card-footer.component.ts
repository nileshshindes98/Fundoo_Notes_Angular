import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent {
  @Input() noteId: any;
  @Input() from;
  @Input() isCreateNoteComponent: boolean;
  @Input() noteData: any;
  @Output() onColorchange = new EventEmitter();
  @Output() onClose = new EventEmitter();
  notesArray: any;

  onButtonClick() {
    this.onClose.emit(true);
  }

  constructor(
    private _noteService: NoteService,
    private _snackBar: MatSnackBar
  ) {}

  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#faafa8', name: 'red' },
    { code: '#f39f76', name: 'orange' },
    { code: '#fff8b8', name: 'yellow' },
    { code: '#e2f6d3', name: 'green' },
    { code: '#b4ddd3', name: 'teal' },
    { code: '#d4e4ed', name: 'Blue' },
    { code: '#aeccdc', name: 'darkblue' },
    { code: '#d3bfdb', name: 'purple' },
    { code: '#f6e2dd', name: 'pink' },
    { code: '#e9e3d4', name: 'brown' },
    { code: '#efeff1', name: 'grey' },
  ];

  setColor(color: any) {
    if (this.noteId) {
      this.noteData.color = color;
      const data = {
        color: color,
        noteIdList: [this.noteId],
      };
      this._noteService.changeColor(data).subscribe((response: any) => {
        this.onColorchange.emit(color);
      });
    } else {
      this.onColorchange.emit(color);
    }
  }

  archive(isArchived) {
    const data = {
      noteIdList: [this.noteId],
      isArchived: isArchived,
    };
    this._noteService.archiveService(data).subscribe((data: any) => {
      if (data.data.success) {
        this._snackBar.open(( isArchived ? 'note archived successfully' : 'note unarchived successfully'), 'close', { duration: 1500 });
        this.getAllNotes();
      }
    });
  }

  getAllNotes() {
    this._noteService.GetallNotes().subscribe((res: any) => {
      this._noteService.updateNotesData(res.data.data);
    });
  }

  delete(isDeleted) {
    const data = {
      noteIdList: [this.noteId],
      isDeleted: isDeleted,
    };
    this._noteService.deleteNotes(data).subscribe((data: any) => {
      this._snackBar.open(isDeleted ? 'note deleted successfully' : 'note restored successfully',
        'close', { duration: 1500 });
      this.getAllNotes();
    });
  }

  deleteForever() {
    let data = {
      noteIdList: [this.noteId],
      isDeleted: true,
    };
    this._noteService.deleteForever(data).subscribe((data: any) => {
      this._snackBar.open('note deleted forever', 'close', { duration: 1500 });
      this.getAllNotes();
    });
  }
}
