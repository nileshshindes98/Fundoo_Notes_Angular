import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  constructor(private note: NoteService) {}
  notesArray: any = [];
  selectedColor :string;
  onColorchange(color:string){
    this.selectedColor=color;
  }

  ngOnInit(): void {
    this.note.GetallNotes().subscribe((notesData: any) => {
      this.notesArray = notesData.data.data.reverse();
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === false && noteData.isArchived === false;
      });
    });
  }

  onNoteCreated(newNote: any) {
    this.notesArray.push(newNote);
  }
}