import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersdetailsComponent } from './trainersdetails.component';

describe('TrainersdetailsComponent', () => {
  let component: TrainersdetailsComponent;
  let fixture: ComponentFixture<TrainersdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
