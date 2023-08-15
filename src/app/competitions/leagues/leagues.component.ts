import { Component, OnInit } from '@angular/core';

import { CompetitionsService } from '../../shared/services/competitions.service';
import { LeagueInterface } from '../../shared/types/league.interface';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements OnInit {
  public leagues: LeagueInterface | undefined;

  constructor(private competitionService: CompetitionsService) {}

  ngOnInit() {
    this.competitionService.getLeagues();
  }
}
