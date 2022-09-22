import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@nxdevdemo/ui';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(
      [
        {
          path: 'shop-cart',
          loadChildren: () =>
            import('shop-cart/Module').then((m) => m.HomeModule),
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'about',
          loadChildren: () =>
            import('about/Module').then((m) => m.HomeModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
