import { Observable } from 'rxjs';

export interface Repo<T extends { id: string }> {
  getAll(): Promise<T[]>;
  getById(id: T['id']): Promise<T>;
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  search?(query: { [key: string]: unknown }): Promise<T[]>;
  add(newItem: Omit<T, 'id'>): Promise<T>;
  update(id: T['id'], updatedItem: Partial<T>): Promise<T>;
  delete(id: T['id']): Promise<T>;
}

export interface RepoRx<T extends { id: string }> {
  getAll(): Observable<T[]>;
  getById(id: T['id']): Observable<T>;
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  search?(query: { [key: string]: unknown }): Observable<T[]>;
  add(newItem: Omit<T, 'id'>): Observable<T>;
  update(id: T['id'], updatedItem: Partial<T>): Observable<T>;
  delete(id: T['id']): Observable<T>;
}
