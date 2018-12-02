import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTestsComponent } from './trainee-tests.component';

describe('TraineeTestsComponent', () => {
  let component: TraineeTestsComponent;
  let fixture: ComponentFixture<TraineeTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
