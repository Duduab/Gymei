import { Component, OnInit } from '@angular/core';
import {TrainPlanService} from '../../Services/train-plan.service';
import {PlandialogComponent} from './plandialog/plandialog.component';
import {MatDialog} from '@angular/material';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  player: YT.Player;
  private id: string = 'YdB1HMCldJY';
  private height: number = 420;
  private width: number = 620;
  Trainplan = [];
  constructor(private trplan: TrainPlanService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.trplan.getPlan().subscribe( data => {
      this.Trainplan = data;

    });

  }

  openDialog(link: string): void {
    this.id = link;
    let dialogRef = this.dialog.open(PlandialogComponent, {
      height: '490px',
      width: '650px',
      data: {id: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.id = result;
    });

  }

}
