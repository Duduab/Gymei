import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {TplanObject} from '../train_plan';
import {ProductObject} from '../products';


@Injectable({
  providedIn: 'root'
})
export class TrainPlanService {

  private _url: string = '../assets/data/trainplan_data_example.json';

  constructor(private http: HttpClient) { }

  getPlan(): Observable<TplanObject[]> {
    return this.http.get<TplanObject[]>(this._url);
  }
}

