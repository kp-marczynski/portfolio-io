import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

import {PortfolioHeaderComponent} from './portfolio/portfolio-header/portfolio-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PortfolioHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
