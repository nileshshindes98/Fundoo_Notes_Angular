import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit, OnDestroy {
  notesArray: any;
  subscription: Subscription;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.subscription = this.note
      .GetallArchiveNotes()
      .subscribe((notes: any) => {
        this.notesArray = notes.data.data.reverse();
        this.notesArray = this.notesArray.filter((noteData: any) => {
          return noteData.isArchived === true && noteData.isDeleted === false;
        });
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}