import { Component, OnInit } from '@angular/core';
import { SortOption } from 'src/app/enums/sort-option';
import { SelectOption } from 'src/app/models/select-option';
import { SurveyService } from '../../services/survey.service';
import { UiService } from '../../services/ui-service/ui.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {

  surveys: any;

  filterdSurveys: any;

  searchText: string = '';

  sortBy: string = '';

  sortOptions: SelectOption[] = [];

  constructor(private surveyService: SurveyService, private uiService: UiService) { }

  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe(res => {
      this.surveys = res.surveys;
      this.filterdSurveys = res.surveys;
    });
    this.sortOptions = this.uiService.getSortOptions();
    console.log(this.sortOptions);

  }

  sort(): void {
    if (this.sortBy === SortOption.NumberOfQuestions) {
      this.filterdSurveys.sort(this.sortByQuestionNumber);
    } else if (this.sortBy === SortOption.CreatedDate) {
      this.filterdSurveys.sort(this.sortByCreatedDate);
    } if (this.sortBy === SortOption.Time) {
      this.filterdSurveys.sort(this.sortByTime);
    }
  }

  filterSurvey(): void {
    this.filterdSurveys = this.surveys.filter((e: any) => {
      if (e.title.toLowerCase().includes(this.searchText)) return e;
      if (e.date.toLowerCase().includes(this.searchText)) return e;
    });
    this.sort();
  }

  initialSurvey(): void {
    this.searchText = '';
    this.filterdSurveys = this.surveys;
  }

  sortByQuestionNumber(a: any, b: any): number {
    return a.questions.length - b.questions.length;
  }

  sortByCreatedDate(a: any, b: any): number {
    if (a['date'] < b['date']) return -1;
    if (a['date'] > b['date']) return 1;
    return 0;
  }

  sortByTime(a: any, b: any): number {
    const x = parseInt(a['time']);
    const y = parseInt(b['time']);
    return x - y;
  }

}
