import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
})
export class CharacterSearchComponent {
  searchInputControl = new FormControl();

  @Output() searchTerm = new EventEmitter<string>();
  @Output() resetSearch = new EventEmitter<void>();

  constructor() {}

  searchTermValue(value: string) {
    if (value) {
      this.searchTerm.emit(value);
    }
  }

  clearSearch() {
    this.searchInputControl.setValue('');
    this.resetSearch.emit();
  }
}
