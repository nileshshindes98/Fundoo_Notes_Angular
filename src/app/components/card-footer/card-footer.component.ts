import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CreateNoteComponent } from '../create-note/create-note.component';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent {
  @Input() noteId: any;
  @Output() onClose = new EventEmitter();
  @Input() from;
  @Input() isCreateNoteComponent: boolean;

  notesArray: any;

  onButtonClick() {
    this.onClose.emit(true);
  }

  constructor(private note: NoteService) { }

  archive() {
    let data = {
      noteIdList: [this.noteId],
      isArchived: true,
    };
    this.note.archiveService(data).subscribe((data: any) => {
      console.log(data, 'note is Archived');
    });
  }

  unarchive() {
    let data = {
      noteIdList: [this.noteId],
      isArchived: false,
    };
    this.note.archiveService(data).subscribe((data: any) => {
      console.log(data, 'note is Unarchived');
    });
  }

  delete() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isDeleted: true
    }
    this.note.deleteNotes(data).subscribe((data: any) => {
      console.log("Deleted Successfully", data);
  
    });
  }

  restoreDelete(){
    let data ={
      noteIdList: [this.noteId],
      isDeleted: false
    }
    this.note.deleteNotes(data).subscribe((data:any)=>{
      console.log("restore deleted note",data);
      
    })
  }

  deleteForever(){
    let data ={
      noteIdList: [this.noteId],
      isDeleted: true
    }
    this.note.deleteForever(data).subscribe((data:any)=>{
      console.log("Forever Deleted a note ",data);
      
    })
  }
}