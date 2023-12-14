
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss'],
})
export class DialogboxComponent implements OnInit {
  public title: any;
  public description: any;
  notesArray: any = [];
  constructor(
    private noteService: NoteService,
    public dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.description = data.description;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  updateColor(event) {
    this.data.color = event;
  }

  updateNote() {
    let request = {
      noteId: this.data.id,
      title: this.title,
      description: this.description,
    };
    this.noteService.updateNoteService(request).subscribe((result: any) => {
      if (result.data.success ) {
        this.noteService.GetallNotes().subscribe((res: any) => {
          this.noteService.updateNotesData(res.data.data);
          this.dialogRef.close(res);
        })
      }
    
      //here we change condition filter
      // this.notesArray=res.data.data.reverse();
      // this.notesArray = this.notesArray.filter((res:any)=>{
      //   return res.isDeleted === false && res.isArchived === false
      // })
    });
  }
}
