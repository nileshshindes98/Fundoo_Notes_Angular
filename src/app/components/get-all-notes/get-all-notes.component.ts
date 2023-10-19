import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  //get all notes API in ngOnit
  //1) display notes 
  //2) get all note api & 
  //3) get all cha HTML mdhe array print karaycha using ngFor
  //

  constructor(private note: NoteService) { }
  token: any;
  notesArray: any = [];
  ngOnInit(): void {
    // this.data.push()
    this.note.GetallNotes(this.token).subscribe((notesData: any) => {
      this.notesArray = notesData.data.data.reverse();
    })
  }
}
