import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Role = 'admin' | 'user' | 'moderator';

interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  birthdate: string;
  role: Role;
  avatarUrl?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // input search
  searchEmail: string = '';

  // base data (provided users list)
  users: User[] = [
    {
      id: 1,
      username: 'Ahmed Ali',
      email: 'ahmed@gmail.com',
      phone: '01012345678',
      birthdate: '1999-02-14',
      role: 'admin',
    },
    {
      id: 2,
      username: 'Mona Samy',
      email: 'mona@yahoo.com',
      phone: '01198765432',
      birthdate: '2000-08-01',
      role: 'user',
    },
    {
      id: 3,
      username: 'Youssef Omar',
      email: 'youssef@outlook.com',
      phone: '01222223333',
      birthdate: '1998-11-22',
      role: 'moderator',
    },
    {
      id: 4,
      username: 'Sara Ahmed',
      email: 'sara@gmail.com',
      phone: '01544445555',
      birthdate: '2001-05-10',
      role: 'user',
    },
  ];

  // derived list (search by email)
  get filteredUsers(): User[] {
    const q = this.searchEmail.trim().toLowerCase();
    if (!q) return this.users;
    return this.users.filter((u) => u.email.toLowerCase().includes(q));
  }

  resetSearch(): void {
    this.searchEmail = '';
  }

  // role chip class
  roleClass(role: Role): string {
    switch (role) {
      case 'admin':
        return 'chip chip-admin';
      case 'user':
        return 'chip chip-user';
      case 'moderator':
        return 'chip chip-moderator';
      default:
        return 'chip';
    }
  }
}
