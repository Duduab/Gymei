import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Output() AddQuiz = new EventEmitter<{age: number, days: number, smoke: string, hospital: string, daysinweek: number}>();
  boolini: boolean = false;
  frequency = [
    {fr: 1},
    {fr: 2},
    {fr: 3},
    {fr: 4},
    {fr: 5},
    {fr: 6},
    {fr: 7}
  ];
  health = [
    {ans: 'Yes'},
    {ans: 'No'}
    ];
  selectedValue1 = null;
  selectedValue2 = null;
  selectedValue3 = null;
  selectedValue4 = null;
  selectedValue5 = null;


  constructor() { }

  ngOnInit() {
  }

  changeDisplay() {
    console.log(this.selectedValue1 , this.selectedValue2 , this.selectedValue3 , this.selectedValue4);
    this.boolini = true;
  }





}
