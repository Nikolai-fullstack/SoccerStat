import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CompetitionsModule } from './competitions/competitions.module';

import { CompetitionsService } from './shared/services/competitions.service';

import { AppComponent } from './app.component';
import { LeaguesComponent } from './competitions/leagues/leagues.component';
import { CalendarOfLeaguesComponent } from './competitions/calendar-of-leagues/calendar-of-leagues.component';

@NgModule({
  declarations: [AppComponent, LeaguesComponent, CalendarOfLeaguesComponent],
  imports: [BrowserModule, HttpClientModule, RouterOutlet, CompetitionsModule],
  providers: [CompetitionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
