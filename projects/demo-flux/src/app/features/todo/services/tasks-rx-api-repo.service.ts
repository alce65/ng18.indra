import { inject, Injectable } from '@angular/core';
import { RepoRx } from '../../../types/repo';
import { Task } from '../../../entities/task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TasksRxApiRepoService implements RepoRx<Task> {
  endPoint = '/tasks';
  urlEndPoint = environment.urlBase + this.endPoint;
  private http = inject(HttpClient);

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlEndPoint);
  }

  getById(id: string): Observable<Task> {
    const url = `${this.urlEndPoint}/${id}`;
    return this.http.get<Task>(url);
  }

  add(newItem: Omit<Task, 'id'>): Observable<Task> {
    return this.http.post<Task>(this.urlEndPoint, newItem);
  }
  update(id: string, updatedItem: Partial<Task>): Observable<Task> {
    const url = `${this.urlEndPoint}/${id}`;
    return this.http.patch<Task>(url, updatedItem);
  }
  delete(id: string): Observable<Task> {
    const url = `${this.urlEndPoint}/${id}`;
    return this.http.delete<Task>(url);
  }
}
