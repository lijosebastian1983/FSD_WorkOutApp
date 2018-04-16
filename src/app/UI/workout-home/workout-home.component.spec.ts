import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutHomeComponent } from './workout-home.component';

describe('WorkoutHomeComponent', () => {
  let component: WorkoutHomeComponent;
  let fixture: ComponentFixture<WorkoutHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
