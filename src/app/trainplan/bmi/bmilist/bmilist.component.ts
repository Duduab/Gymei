import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bmilist',
  templateUrl: './bmilist.component.html',
  styleUrls: ['./bmilist.component.scss']
})
export class BmilistComponent implements OnInit {
  @Input() BMIOUT: {weight: number, height: number};
  constructor() { }

  ngOnInit() {
  }

}
