import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNotes'
})
export class FilterNotesPipe implements PipeTransform {
  transform(notes: any[], searchText: string): any[] {
    if (!notes || !searchText) {
      return notes;
    }
    
    searchText = searchText.toLowerCase();
    
    return notes.filter(note => 
      note.title.toLowerCase().includes(searchText) ||
      note.description.toLowerCase().includes(searchText)
    );
  }
}
