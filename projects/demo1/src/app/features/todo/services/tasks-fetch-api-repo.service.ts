import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Task } from '../../../entities/task';
import { Repo } from '../../../types/repo';

@Injectable({
  providedIn: 'root',
})
export class TasksFetchApiRepoService implements Repo<Task> {
  endPoint = '/tasks';
  urlEndPoint = environment.urlBase + this.endPoint;

  async getAll(): Promise<Task[]> {
    const resp = await fetch(this.urlEndPoint);
    console.log(resp);
    return resp.json();
  }

  async getById(id: string): Promise<Task> {
    const url = `${this.urlEndPoint}/${id}`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error('Task not found');
    }
    return resp.json();
  }

  async add(newItem: Omit<Task, 'id'>): Promise<Task> {
    const resp = await fetch(this.urlEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    return resp.json();
  }

  async update(id: string, updatedData: Partial<Task>): Promise<Task> {
    const url = `${this.urlEndPoint}/${id}`;
    const resp = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!resp.ok) {
      throw new Error('Task not found');
    }
    return resp.json();
  }

  async delete(id: string): Promise<Task> {
    const url = `${this.urlEndPoint}/${id}`;
    const resp = await fetch(url, {
      method: 'DELETE',
    });
    if (!resp.ok) {
      throw new Error('Task not found');
    }
    return resp.json();
  }
}
