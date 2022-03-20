import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.scss']
})
export class TakeSurveyComponent implements OnInit {

  survey: any;

  currentQuestionId: number = 0;

  get currentQuestion(): any {
    return this.survey?.questions[this.currentQuestionId];
  }

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.surveyService.getSurvey(id).subscribe(res => {
      this.survey = res.surveys.filter((s: any) => s.id == id)[0];
      
      
    })
  }

  changeQuestion(index: number): void {
    this.currentQuestionId = index;
    console.log(this.survey.questions[index]);
  }

}
