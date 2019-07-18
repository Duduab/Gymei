import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiformComponent } from './bmiform.component';

describe('BmiformComponent', () => {
  let component: BmiformComponent;
  let fixture: ComponentFixture<BmiformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
