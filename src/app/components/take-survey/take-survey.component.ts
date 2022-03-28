import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../services/survey.service';

export class Answer {
  id: any;
  answer: { [id: number]: string } = {};
}

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.scss']
})
export class TakeSurveyComponent implements OnInit {

  survey: any;

  currentQuestionId: number = 0;

  duration: any;

  timer: any;

  surveyResult = new Answer;

  get currentQuestion(): any {
    return this.survey?.questions[this.currentQuestionId];
  }

  get second(): number {
    return this.duration;
  }

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.surveyResult.id = id;
    this.surveyService.getSurvey(id).subscribe(res => {
      this.survey = res.surveys.filter((s: any) => s.id == id)[0];
      this.duration = parseInt(this.survey.time) * 60;

      this.timer = setInterval(() => {
        if (this.duration == 0) clearInterval(this.timer);
        --this.duration;
      }, 1000);
    });
  }

  changeQuestion(index: number): void {
    this.currentQuestionId = index;
  }

  end(): void {
    clearInterval(this.timer);
    this.duration = 0;
    console.log(this.surveyResult);
  }

  setAnswer(answer: any) {
    this.surveyResult.answer[this.currentQuestionId] = answer;
  }

}
