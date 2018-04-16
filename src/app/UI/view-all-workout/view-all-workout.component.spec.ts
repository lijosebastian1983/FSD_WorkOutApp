import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllWorkoutComponent } from './view-all-workout.component';

describe('ViewAllWorkoutComponent', () => {
  let component: ViewAllWorkoutComponent;
  let fixture: ComponentFixture<ViewAllWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
