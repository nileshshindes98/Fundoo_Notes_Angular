import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTextService {
  private searchTextSource = new Subject<string>();
  // observable searchText$ to allow components to subscribe to changes
  searchText$ = this.searchTextSource.asObservable(); 

  setSearchText(searchText: string) {
    this.searchTextSource.next(searchText);
}
}
