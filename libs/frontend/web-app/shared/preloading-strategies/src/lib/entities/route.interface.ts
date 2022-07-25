import { Route } from '@angular/router';

export interface IRoute extends Route {
  data?: ICustomRouteData;
}

interface ICustomRouteData {
  preload: boolean;
  loadAfterMS?: number;
}
