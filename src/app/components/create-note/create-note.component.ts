import { Component } from '@angular/core';
import { NoteService } from '../../service/noteService/note.service';
// import { Output, EventEmitter } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  isSecondCardOpen: boolean = false;

  title: string = '';
  description: string = '';
 

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
    // console.log(data)
    // this.token = localStorage.getItem('token');
    // console.log(" add note data ", data,);
    if (this.title && this.description) {
      this.note.addNotes(data).subscribe((response: any) => {
        console.log(response);
        let message = "note created successfull";
        console.log(message);
        window.location.reload() 
      });
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
