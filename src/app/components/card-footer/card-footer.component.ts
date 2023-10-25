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
  @Input() noteData : any; 
@Output() onColorchange = new EventEmitter();
  notesArray: any;

  onButtonClick() {
    this.onClose.emit(true);
  }

  constructor(private note: NoteService) { }

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
    this.noteData.color = color;
    console.log('color', color);
    let data = {
      color: color,
      noteIdList: [this.noteId],
    }
    console.log(data);
    this.note.changeColor(data).subscribe(
      (response: any) => {
        //here we emit the selected color
        this.onColorchange.emit(color); 
        console.log('Response of setColour', response);
      }
    );

  }

  archive(isArchived) {
    let data = {
      noteIdList: [this.noteId],
      isArchived: isArchived,
    };
    this.note.archiveService(data).subscribe((data: any) => {
      console.log(data, 'note is Archived');
      if(data.data.success){
        // this.note.GetallNotes().subscribe(res=>{res})
        window.location=window.location
      }
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