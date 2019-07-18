import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainplanComponent } from './trainplan.component';

describe('TrainplanComponent', () => {
  let component: TrainplanComponent;
  let fixture: ComponentFixture<TrainplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
