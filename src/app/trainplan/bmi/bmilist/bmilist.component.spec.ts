import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmilistComponent } from './bmilist.component';

describe('BmilistComponent', () => {
  let component: BmilistComponent;
  let fixture: ComponentFixture<BmilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
