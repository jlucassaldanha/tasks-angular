import { Component, input } from '@angular/core';

export interface TaskType {
  id: string;
  title: string;
  details: string;
}

@Component({
  selector: 'app-task-display-card',
  imports: [],
  templateUrl: './task-display-card.html',
  styleUrl: './task-display-card.css',
})
export class TaskDisplayCard {
  taskData = input.required<TaskType>()
}
