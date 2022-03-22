import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {

  surveys: any;

  filterdSurveys: any;

  searchText: string = '';

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe(res => {
      this.surveys = res.surveys;
      this.filterdSurveys = res.surveys;
    })
  }

  filterSurvey(): void {
    this.filterdSurveys = this.surveys.filter((e: any) => {
      if (e.title.toLowerCase().includes(this.searchText)) return e;
      if (e.date.toLowerCase().includes(this.searchText)) return e;
    });
  }

  initialSurvey(): void {
    this.searchText = '';
    this.filterdSurveys = this.surveys;
  }

}
