import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { NoteService } from 'src/app/service/noteService/note.service';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss'],
})
export class DisplayNotesComponent {
  isSecondCardOpen: boolean = false;
  isCreateNoteComponent = false;
  @Input() allNotes: any = [];
  @Input() calledFrom: string = '';
  
  constructor(public note: NoteService, public dialog: MatDialog) {}

  openDialog(note: any) {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      data: note,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.allNotes = result.data.data.reverse();
    });
  }
}