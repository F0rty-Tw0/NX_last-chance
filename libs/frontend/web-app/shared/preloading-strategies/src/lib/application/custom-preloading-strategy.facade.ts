import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs';

import { IRoute } from '../entities/route.interface';
import { CustomPreloadingStrategyService } from '../infrastructure/custom-preloading-strategy.service';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingStrategyFacade implements PreloadingStrategy {
  constructor(private customPreloadingStrategyService: CustomPreloadingStrategyService) {}

  // eslint-disable-next-line rxjs/finnish
  preload(route: IRoute, fn: () => Observable<unknown>): Observable<unknown> {
    return this.customPreloadingStrategyService.preload(route, fn);
  }
}
