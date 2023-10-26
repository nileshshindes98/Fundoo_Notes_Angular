import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { SearchTextService } from 'src/app/service/search-text.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  searchText: string = '';
  logOutFunction() {
    localStorage.removeItem('token');
  }
  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher, private router: Router,private SearchTextService:SearchTextService) {
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
    this.SearchTextService.setSearchText(this.searchText);
  }
}
