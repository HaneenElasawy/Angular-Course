import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoListComponent {
  @Input() todos: {id: number; title: string; completed: boolean}[] = [];
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}
