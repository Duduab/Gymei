import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bmiform',
  templateUrl: './bmiform.component.html',
  styleUrls: ['./bmiform.component.scss']
})
export class BmiformComponent implements OnInit {
  @Output() BMI = new EventEmitter<{weight: number, height: number}>();
  constructor() { }

  ngOnInit() {
  }

  CalculateBmi(weight , height) {
    this.BMI.emit({
      weight: weight.value,
      height: height.value
    });
  }

}
