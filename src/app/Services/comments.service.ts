import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CommentsObject} from '../comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url: string = '../assets/data/comments.json';

  constructor(private http: HttpClient) { }

  getComments(): Observable<CommentsObject[]> {
    return this.http.get<CommentsObject[]>(this._url);
  }

}
