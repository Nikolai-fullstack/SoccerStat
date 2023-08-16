import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CompetitionsRoutingModule } from './competitions-routing.module';

import { CompetitionsService } from '../shared/services/competitions.service';

import { OneLeagueComponent } from './one-league/one-league.component';
import { CalendarOfLeaguesComponent } from './calendar-of-leagues/calendar-of-leagues.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    OneLeagueComponent,
    CalendarOfLeaguesComponent,
    LeaguesComponent,
  ],
  providers: [CompetitionsService],
  imports: [
    CommonModule,
    RouterModule.forRoot(CompetitionsRoutingModule),
    FormsModule,
    PaginatorModule,
  ],
})
export class CompetitionsModule {}
