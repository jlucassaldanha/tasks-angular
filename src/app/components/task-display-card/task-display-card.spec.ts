import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDisplayCard } from './task-display-card';

describe('TaskDisplayCard', () => {
  let component: TaskDisplayCard;
  let fixture: ComponentFixture<TaskDisplayCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDisplayCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDisplayCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
