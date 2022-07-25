import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, delay, retryWhen } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  private readonly maxRetries = 2;

  private readonly delayMs = 2000;

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retryWhen((error$) =>
        error$.pipe(
          mergeMap((newError, index) => {
            if (index < this.maxRetries && newError.status === 500) {
              return of(newError).pipe(delay(this.delayMs));
            }

            throw newError;
          }),
        ),
      ),
    );
  }
}
