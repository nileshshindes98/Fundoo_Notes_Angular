
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

  constructor(
    private noteService: NoteService,
    public dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.title = data.title;
    this.description = data.description;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  updateNote() {
    let request = {
      noteId: this.data.id,
      title: this.title,
      description: this.description,
    };
    this.noteService.updateNoteService(request).subscribe((result: any) => {
      console.log(result);
      if (result.data.success) {
        this.noteService.GetallNotes().subscribe(res => {
          this.dialogRef.close(res);
        })
      }
    });
  }
}
