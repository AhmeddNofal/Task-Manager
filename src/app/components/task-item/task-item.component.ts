import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  @Output() toggleEvent: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  delete(task: Task) {
    this.onDelete.emit(task);
  }

  sendToggle(task: Task) {
    this.toggleEvent.emit(task);
  }

}
