import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
import { SearchTextService } from 'src/app/service/search-text.service';
//here searchText service are injected
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  constructor(private note: NoteService,private searchTextService: SearchTextService) {}
  //below are declare property
  notesArray: any = [];
  selectedColor: string;
  searchText: string = '';

  onColorchange(color: string) {
    this.selectedColor = color;
  }

  ngOnInit(): void {
    this.note.GetallNotes().subscribe((notesData: any) => {
      this.notesArray = notesData.data.data.reverse();
      this.notesArray = this.notesArray.filter((noteData: any) => {
        return noteData.isDeleted === false && noteData.isArchived === false;
      });

      // Subscribe to searchText changes
      this.searchTextService.searchText$.subscribe((searchText) => {
        this.searchText = searchText;
        this.filterNotes(); 
      });
    });
  }

  onNoteCreated(newNote: any) {
    this.notesArray.push(newNote);
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
      this.note.GetallNotes().subscribe((notesData: any) => {
        this.notesArray = notesData.data.data.reverse();
        this.notesArray = this.notesArray.filter((noteData: any) => {
          return noteData.isDeleted === false && noteData.isArchived === false;
        });
      });
    }
  }
}
