import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import {MatDialog} from '@angular/material';
import {TrainersdetailsComponent} from './trainersdetails/trainersdetails.component';

export interface TrainerData {
  firstname: string;
  lastname: string;
  Pic: string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  users: Object;
  firstname: string = null;
  lastname: string = null;
  Pic: string = null;
  email: string = null;

  constructor(private data: DataService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    });
  }

  openDialog(Fname: string, Lname: string, image: string, Email: string) {
    this.firstname = Fname;
    this.lastname = Lname;
    this.Pic = image;
    this.email = Email;
    this.dialog.open(TrainersdetailsComponent, {
      height: '400px',
      width: '400px',
      data: {firstname: this.firstname, lastname: this.lastname, image: this.Pic, email: this.email}
      });
  }

}
