import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  @Output() AddCust = new EventEmitter<{Firstname: string, Lastname: string}>();

  constructor() { }

  ngOnInit() {
  }

  FillDetails(Firstname, Lastname) {
    this.AddCust.emit({
      Firstname: Firstname.value,
      Lastname: Lastname.value
    });
    console.log(Firstname.value, Lastname.value);
  }
}




