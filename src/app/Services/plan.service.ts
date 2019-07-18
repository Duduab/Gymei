import {Injectable} from '@angular/core';
import {Plan} from '../trainplan/plan';

@Injectable()
export class ResultsService {

  public results: Plan[];

  constructor() {
    this.results = [];
  }

}
