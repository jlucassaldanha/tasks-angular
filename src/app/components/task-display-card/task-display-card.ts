import { Component, input, output, signal } from '@angular/core';

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
  isEditing = signal<boolean>(false)
  deleteRequest = output<string>()

  handleEdit() {
    this.isEditing.set(true)
  }

  handleDelete() {
    this.deleteRequest.emit(this.taskData().id)
  }

  handleCancelEdit() {
    this.isEditing.set(false)
  }
}
