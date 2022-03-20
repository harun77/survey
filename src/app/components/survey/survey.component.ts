import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  @Input() survey: any;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.survey);
    
  }

  takeSurvey(): void {
    this.router.navigate(['/surveys', this.survey.id]);
  }

}
