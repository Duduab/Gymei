import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss']
})
export class PurposeComponent implements OnInit {

  @Output() AddPurpose = new EventEmitter<{purpose: string}>();

  constructor() { }

  ngOnInit() {
  }

  onClick(name: string) {
    this.AddPurpose.emit({
      purpose: name
    });
    console.log(name);
  }

}
