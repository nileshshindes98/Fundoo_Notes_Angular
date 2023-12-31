import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HTTPService/http.service.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    }),
  };
  noteListSubject = new BehaviorSubject<any[]>([]);
  searchTextSource = new Subject<string>();

  constructor(private httpservice: HttpService) {}

  addNotes(data: any) {
    return this.httpservice.PostService('notes/addNotes', data, true, this.options);
  }

  GetallNotes() {
    return this.httpservice.GetService('notes/getNotesList', this.options);
  }

  updateNoteService(data: any) {
    return this.httpservice.PostService('notes/updateNotes', data, true, this.options);
  }

  changeColor(data: any) {
    return this.httpservice.PostService('notes/changesColorNotes', data, true, this.options);
  }

  archiveService(data: any) {
    return this.httpservice.PostService('notes/archiveNotes', data, true, this.options);
  }
  GetallArchiveNotes() {
    return this.httpservice.GetService('notes/getArchiveNotesList', this.options);
  }

  deleteNotes(deleteData: any) {
    return this.httpservice.PostService('notes/trashNotes/', deleteData, true, this.options);
  }

  deleteForever(deleteData: any) {
    return this.httpservice.PostService('notes/deleteForeverNotes', deleteData, true, this.options);
  }

  updateNotesData(noteData) {
    this.noteListSubject.next(noteData)
  }

  setSearchText(searchText: string) {
    this.searchTextSource.next(searchText);
  }
}
