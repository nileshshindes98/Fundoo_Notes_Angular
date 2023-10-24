import { Component } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
  notesArray: any;


  constructor(private NotesService: NoteService) { }

  ngOnInit(): void {
    this.getTrashNotes()
  }

  getTrashNotes(){
    this.NotesService.GetallNotes().subscribe((notes: any) => {
      this.notesArray = notes.data.data.reverse();
      console.log("the reverse", this.notesArray);
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === true;
       });
       console.log("the data",this.notesArray);
    })
  }
  
}
