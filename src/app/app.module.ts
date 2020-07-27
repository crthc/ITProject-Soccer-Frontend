import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { PlayersViewComponent } from './views/admin/players-view/players-view.component';
import { SinglePlayerViewComponent } from './views/admin/single-player-view/single-player-view.component';
import { LandingInfoComponent } from './views/landing-view/landing-info/landing-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    PlayersViewComponent,
    SinglePlayerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],


@NgModule({
  declarations: [AppComponent, LandingViewComponent, LandingInfoComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
