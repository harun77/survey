import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {

  surveys: any;

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe(res => {
      this.surveys = res.surveys;
    })
  }

}
