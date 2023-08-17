import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';

import { CompetitionsRoutingModule } from './competitions-routing.module';

import { CompetitionsService } from '../shared/services/competitions.service';

import { OneLeagueComponent } from './one-league/one-league.component';
import { CalendarOfLeaguesComponent } from './calendar-of-leagues/calendar-of-leagues.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    OneLeagueComponent,
    CalendarOfLeaguesComponent,
    LeaguesComponent,
    HeaderComponent,
  ],
  providers: [CompetitionsService],
  imports: [
    CommonModule,
    RouterModule.forRoot(CompetitionsRoutingModule),
    FormsModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    BreadcrumbModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatNativeDateModule,
  ],
})
export class CompetitionsModule {}
