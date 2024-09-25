import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';
import { TaskStateService } from '../services/task-state.service';
import { inject } from '@angular/core';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request interceptor', req);
  const taskState = inject(TaskStateService);
  return next(req).pipe(
    tap((resp) => console.log('Response interceptor', resp)),
    catchError((error) => {
      console.log('Response Error handler interceptor', error);
      taskState.manageError(error);
      return of(); // throwError(() => error);
    }),
  );
};
