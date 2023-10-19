import { Component } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  isSecondCardOpen: boolean = false;

  title: string = '';
  description: string = '';
  @Output() createdNote = new EventEmitter<string>();
//@output eventemitter

  constructor(private note: NoteService) { }

  ngOnInit() { }

  onSubmit() {
    //  console.log(this.title);
    //  console.log(this.description);
    // token: any;
    let data = {
      title: this.title,
      description: this.description,
    }
    console.log(data)
    // this.token = localStorage.getItem('token');
    console.log(" add note data ", data, );
    if (this.title && this.description) {
      this.note.addNotes(data).subscribe((response: any) => {
        console.log(response);
        let message = "note created successfull";
        console.log(message);
//emit the resopnse
this.createdNote.emit(response);

        this.title = " ";
        this.description = "";

        // window.location.reload()
      })

    }

  }

  toggleSecondCard() {
    this.isSecondCardOpen = !this.isSecondCardOpen;
  }
  onButtonClick() {
    this.onSubmit();
    this.toggleSecondCard();
  }
}
