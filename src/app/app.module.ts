import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ToolbarComponent,
    InfoCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
