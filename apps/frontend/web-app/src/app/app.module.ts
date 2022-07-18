import { NgModule } from '@angular/core';

import { FrontendWebAppSharedCoreModule } from '@last-chance/frontend/web-app/shared/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [FrontendWebAppSharedCoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
