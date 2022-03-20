import { Component, Input, OnInit } from '@angular/core';

enum QuestionType {
  Text = 'text',
  Radio = 'radio',
  Checkbox = 'checkbox'
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;

  get isTextType(): boolean {
    return this.question?.type === QuestionType.Text;
  }

  get isRadioType(): boolean {
    return this.question?.type === QuestionType.Radio;
  }

  get isCheckboxType(): boolean {
    return this.question?.type === QuestionType.Checkbox;
  }

  get options(): any {
    return this.question?.options;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.question?.options);
    
  }

}
