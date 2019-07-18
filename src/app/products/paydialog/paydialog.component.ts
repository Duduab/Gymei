import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-paydialog',
  templateUrl: './paydialog.component.html',
  styleUrls: ['./paydialog.component.scss']
})

export class PaydialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PaydialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  OnCloseClick() {
    this.dialogRef.close();
  }



}


