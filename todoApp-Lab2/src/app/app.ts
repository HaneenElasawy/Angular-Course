import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form';
import { TodoListComponent } from './components/todo-list/todo-list';

type Todo = { id: number; title: string; completed: boolean };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  todos = signal<Todo[]>([]);

  addTodo(title: string) {
    const t = title.trim();
    if (!t) return;

    this.todos.update((todos) => [
      ...todos,
      { id: Date.now(), title: t, completed: false },
    ]);
  }

  deleteTodo(id: number) {
    this.todos.update((todos) => todos.filter((t) => t.id !== id));
  }

  toggleTodo(id: number) {
    this.todos.update((todos) =>
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }
}
