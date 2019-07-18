import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {TrainerData} from '../trainers.component';

@Component({
  selector: 'app-trainersdetails',
  templateUrl: './trainersdetails.component.html',
  styleUrls: ['./trainersdetails.component.scss']
})
export class TrainersdetailsComponent implements OnInit {

  firstname: string = null;
  lastname: string = null;
  Pic: string = null;
  email: string = null;
  Message1: string = 'Message Sent To';

  constructor(public dialogRef: MatDialogRef<TrainersdetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: TrainerData,
              private details: MatSnackBar) { }

  ngOnInit() {
    this.firstname = this.data.firstname;
    this.lastname = this.data.lastname;
    this.Pic = this.data.Pic;
    this.email = this.data.email;
  }

  OnCloseClick() {
    this.dialogRef.close();
  }

  openSnackBar(name: string) {
    this.details.open(this.Message1, name, {
      duration: 2000,
    });
  }

}
