import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../../shared/services/competitions.service';
import { PrimeNGConfig } from 'primeng/api';
import { LeagueInterface } from '../../shared/types/league.interface';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements OnInit {
  public leagues: LeagueInterface;

  public collectionSize: number;

  public page: number;

  public itemsPerPage = 3;

  constructor(
    private competitionService: CompetitionsService,
    private primengConfig: PrimeNGConfig,
  ) {
    this.primengConfig.ripple = true;
    this.page = 1;
    this.loadPage();
  }

  ngOnInit() {}

  onPageChanged() {
    this.loadPage();
  }

  private loadPage() {
    this.competitionService
      .getLeagues(this.page, this.itemsPerPage)
      .subscribe((page) => {
        this.leagues = page;
        this.collectionSize = this.competitionService.collectionSize;
      });
  }
}
