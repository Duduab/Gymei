import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../Services/comments.service';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  Comments = [];
  commentString: string = null;

  constructor(private commentservice: CommentsService) { }


  ngOnInit() {
    this.commentservice.getComments().subscribe(data => {
      this.Comments = data;
    });
  }


}
