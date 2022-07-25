import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { IRoute } from '../entities/route.interface';

@Injectable()
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  // eslint-disable-next-line rxjs/finnish, class-methods-use-this
  preload(route: IRoute, fn: () => Observable<unknown>): Observable<unknown> {
    const loadRoute = (delayMS: number): Observable<unknown> =>
      delayMS > 0 ? timer(delayMS).pipe(map(() => fn())) : fn();

    if (route.data?.preload) {
      const delayMS = route.data.loadAfterMS ? route.data.loadAfterMS : 0;
      return loadRoute(delayMS);
    }

    return of(null);
  }
}
