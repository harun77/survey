import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getSurveys(): Observable<any> {
    const url = './assets/surveys.json';
    return this.http.get(url);
  }

  getSurvey(id: number): Observable<any> {
    const url = './assets/surveys.json';
    return this.http.get(url);
  }
}
