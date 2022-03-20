import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysComponent } from './components/surveys/surveys.component';
import { TakeSurveyComponent } from './components/take-survey/take-survey.component';

const routes: Routes = [
  { path: 'surveys/:id', component: TakeSurveyComponent },
  { path: 'surveys', component: SurveysComponent },
  { path: '', redirectTo: '/surveys', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
