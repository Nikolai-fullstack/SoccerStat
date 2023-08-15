import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CompetitionsRoutingModule } from './competitions-routing.module';

import { CompetitionsService } from '../shared/services/competitions.service';
import { OneLeagueComponent } from './one-league/one-league.component';

@NgModule({
  declarations: [
    OneLeagueComponent
  ],
  providers: [CompetitionsService],
  imports: [CommonModule, RouterModule.forRoot(CompetitionsRoutingModule)],
})
export class CompetitionsModule {}
