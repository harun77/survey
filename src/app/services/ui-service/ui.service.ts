import { Injectable } from '@angular/core';
import { SortOption } from '../../enums/sort-option';
import { SelectOption } from '../../models/select-option';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  getSortOptions(): SelectOption[] {
    return Object.entries(SortOption).map(x => new SelectOption(x[0], x[1]));
  }
}
