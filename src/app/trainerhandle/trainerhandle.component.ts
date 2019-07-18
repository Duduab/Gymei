import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-trainerhandle',
  templateUrl: './trainerhandle.component.html',
  styleUrls: ['./trainerhandle.component.scss']
})
export class TrainerhandleComponent implements OnInit {

  Message1: string = 'Message Sent!';


  constructor(private review: MatSnackBar) {
  }

  openSnackBar(name: string) {
    this.review.open(this.Message1, name, {
      duration: 2000,
    });
  }

  ngOnInit() {

  }
}
