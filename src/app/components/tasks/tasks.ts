import { Component, signal } from '@angular/core';
import { TaskDisplayCard, TaskType } from "../task-display-card/task-display-card";

@Component({
  selector: 'app-tasks',
  imports: [TaskDisplayCard],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = signal<TaskType[]>([])

  handleAddTask() {
    this.tasks.update(currentTasks => [...currentTasks, { 
      id: crypto.randomUUID(),
      title: "Nova tarefa",
      details: ""
    }])
  }

  handleSaveTask(taskUpdated: TaskType) {
    console.log(taskUpdated)
    this.tasks.update(currentTasks => 
      currentTasks.map(task => 
        task.id === taskUpdated.id 
          ? { ...task, title: taskUpdated.title, details: taskUpdated.details } 
          : task
      )
    )
  }

  handleDeleteTask(idToRemove: string) {
    this.tasks.update(currentTasks => currentTasks.filter(task => task.id !== idToRemove))
  }
}
