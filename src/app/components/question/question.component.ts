import { Component, EventEmitter, Input, Output } from '@angular/core';

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
export class QuestionComponent {

  @Input() question: any;

  @Output() answer = new EventEmitter;

  textAnswer: string = '';

  radioAnswer: string = '';

  checkboxAnswer: string[] = [];

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

  setTextValue(): void {
    this.answer.emit(this.textAnswer);
  }

  setRadioValue(e: any) {
    this.radioAnswer = e.value;
    this.answer.emit(this.radioAnswer);
  }

  setCheckboxValue(e: any, answer: string) {
    if (e.checked) {
      this.checkboxAnswer.push(answer);
    } else {
      this.checkboxAnswer = this.checkboxAnswer.filter(e => e != answer);
    }
    this.answer.emit(this.checkboxAnswer);
  }

}
