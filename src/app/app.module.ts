import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

import {PortfolioHeaderComponent} from './portfolio/portfolio-header/portfolio-header.component';
import {QRCodeModule} from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PortfolioHeaderComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
