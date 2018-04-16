import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UicheckComponent } from './uicheck.component';

describe('UicheckComponent', () => {
  let component: UicheckComponent;
  let fixture: ComponentFixture<UicheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UicheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UicheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
