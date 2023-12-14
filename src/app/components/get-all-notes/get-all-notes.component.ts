import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
//here searchText service are injected
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  constructor(private _noteService: NoteService) {}
  //below are declare property
  notesArray: any = [];
  searchText: string = '';
  calledFrom: string = '';

  ngOnInit(): void {
    this._noteService.noteListSubject.subscribe(res => {
      this.notesArray = res.reverse().filter((noteData: any) => {
        this.calledFrom = window.location.pathname.replace('/dashboard/', '');
        if (this.calledFrom == 'trash') {
          return noteData.isDeleted;
        } else if (this.calledFrom == 'archive') {
          return !noteData.isDeleted && noteData.isArchived;
        } else {
          return !noteData.isDeleted && !noteData.isArchived;
        }
      });
    });

    this.getAllNotes();

    // Subscribe to searchText changes
    this._noteService.searchTextSource.subscribe((searchText) => {
      this.searchText = searchText;
      this.filterNotes(); 
    });
  }

  getAllNotes() {
    this._noteService.GetallNotes().subscribe((res: any) => {
      this._noteService.updateNotesData(res.data.data);
    });
  }

  onNoteCreated(newNote: any) {
    this.notesArray.unshift(newNote);
  }

   // Function to filter notes based on the search text
  filterNotes() {
    if (this.searchText) {
      this.notesArray = this.notesArray.filter((note: any) => {
        return (
          note.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          note.description.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    } else {
      // If searchText is empty, show all notes
      this.getAllNotes();
    }
  }
}
