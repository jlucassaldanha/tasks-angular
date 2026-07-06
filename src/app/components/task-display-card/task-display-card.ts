import { Component, input, OnInit, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface TaskType {
  id: string;
  title: string;
  details: string;
}

@Component({
  selector: 'app-task-display-card',
  imports: [ReactiveFormsModule],
  templateUrl: './task-display-card.html',
  styleUrl: './task-display-card.css',
})
export class TaskDisplayCard implements OnInit {
  taskData = input.required<TaskType>()
  isEditing = signal<boolean>(false)
  deleteRequest = output<string>()
  taskSubmit = output<TaskType>()

  taskForm = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    details: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    })
  })

  ngOnInit() {
    this.taskForm.setValue({
      title: this.taskData().title,
      details: this.taskData().details
    })
  }

  onSubmit() {
    if (this.taskForm.valid){
      const title = this.taskForm.controls.title.value
      const details = this.taskForm.controls.details.value

      this.taskSubmit.emit({id: this.taskData().id, title, details})

      this.handleCancelEdit()
    }
  }

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
