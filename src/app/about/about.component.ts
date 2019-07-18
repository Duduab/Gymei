import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  m: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ChangeClass() {
    this.m = 1;
  }

  ChangeClass2() {
    this.m = 2
  }

}
