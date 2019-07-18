import { Injectable } from '@angular/core';
import {Plan} from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanServiceService {

  public plan: Plan[];

  constructor() {
    this.plan = [];
  }

  getPlainList() {
    return this.plan;
  }
}
