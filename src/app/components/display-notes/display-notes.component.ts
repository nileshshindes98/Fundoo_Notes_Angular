import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { NoteService } from 'src/app/service/noteService/note.service';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss'],
})
export class DisplayNotesComponent implements OnInit {
  isSecondCardOpen: boolean = false;
  isCreateNoteComponent = false;

  @Input() allNotes: any = [];
  @Input() calledFrom: string = '';
  @Input() selectedColor: string;
  @Input() searchText: string = '';
  constructor(public note: NoteService, public dialog: MatDialog) {}

  ngOnInit(): void {
    if (this.searchText) {
      this.allNotes = this.allNotes.filter((note: any) => {
        return (
          note.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          note.description.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    }
  }

  openDialog(note: any) {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      data: note,
    });
  }
}
