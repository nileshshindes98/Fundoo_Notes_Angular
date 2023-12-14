import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/service/noteService/note.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  searchText: string = '';
  mobileQuery: MediaQueryList;

  constructor(
    media: MediaMatcher,
    private router: Router,
    private _noteService: NoteService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  archive() {
    this.router.navigateByUrl('dashboard/archive');
  }

  trash() {
    this.router.navigateByUrl('dashboard/trash');
  }

  // here we updating the searchText and triggering a change.
  applySearch() {
    this._noteService.setSearchText(this.searchText);
  }

  logOutFunction() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  refreshNotes() {
    this._noteService.GetallNotes().subscribe((res: any) => {
      this._noteService.updateNotesData(res.data.data);
    });
  }
}
