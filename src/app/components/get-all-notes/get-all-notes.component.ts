import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  constructor(private note: NoteService) {}
  token: any;
  notesArray: any = [];

  ngOnInit(): void {
    this.note.GetallNotes(this.token).subscribe((notesData: any) => {
      this.notesArray = notesData.data.data.reverse();
    });
  }

  onNoteCreated(newNote: any) {
    this.notesArray.push(newNote);
  }
}
