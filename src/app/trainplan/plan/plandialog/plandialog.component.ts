import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../plan.component';

@Component({
  selector: 'app-plandialog',
  templateUrl: './plandialog.component.html',
  styleUrls: ['./plandialog.component.scss']
})
export class PlandialogComponent implements OnInit {
  player: YT.Player;
  private id: string;
  private height: number = 420;
  private width: number = 600;
  constructor(public dialogRef: MatDialogRef<PlandialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.id = this.data.id;
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  OnCloseClick() {
    this.dialogRef.close();
  }


}
