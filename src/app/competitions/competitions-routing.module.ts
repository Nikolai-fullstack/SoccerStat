import { LeaguesComponent } from './leagues/leagues.component';
import { Routes } from '@angular/router';
import { CalendarOfLeaguesComponent } from './calendar-of-leagues/calendar-of-leagues.component';

export const CompetitionsRoutingModule: Routes = [
  {
    path: 'leagues',
    component: LeaguesComponent,
  },
  {
    path: 'calendar-of-leagues',
    component: CalendarOfLeaguesComponent,
  },
  {
    path: '**',
    redirectTo: 'leagues',
  },
];
