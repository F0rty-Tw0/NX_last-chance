import { NgModule } from '@angular/core';

import { FrontendWebAppShellModule } from '@last-chance/frontend/web-app/shell';

import { AppComponent } from './app.component';

@NgModule({
  imports: [FrontendWebAppShellModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
