import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { CompetitionsService } from '../../shared/services/competitions.service';
import { LeagueInterface } from '../../shared/types/league.interface';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements OnInit, OnDestroy {
  @ViewChild('page')
  paginator: MatPaginator;

  public leagues: LeagueInterface[];

  public countOfLeagues: number;

  public page: number;

  public itemsPerPage = 15;

  public pageItems: LeagueInterface[];

  public subs: Subscription[] = [];

  public searchText: string;

  public searchedLeagues: LeagueInterface[];

  public pageSizeOptions: number[] = [15, 25, 30];

  constructor(private competitionService: CompetitionsService) {}

  ngOnInit() {
    const sub = this.competitionService
      .getLeaguesApi()
      .subscribe((response) => {
        this.countOfLeagues = response.count;
        this.leagues = response.competitions;
        this.getSliceLeagues(0, this.itemsPerPage);
      });
    this.subs.push(sub);
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  trackByFunc(index: number, item: LeagueInterface) {
    return item.id;
  }

  searchLeagues() {
    this.searchedLeagues = this.leagues.filter(
      (league) =>
        league.name.toLowerCase().includes(this.searchText) ||
        league.area.name.toLowerCase().includes(this.searchText),
    );
    this.getSliceLeagues(0, this.itemsPerPage);
  }

  getSliceLeagues(startIndex: number, endIndex: number) {
    if (this.searchText) {
      this.pageItems = this.searchedLeagues.slice(startIndex, endIndex);
      this.countOfLeagues = this.searchedLeagues.length;
      return;
    }
    this.pageItems = this.leagues.slice(startIndex, endIndex);
    this.countOfLeagues = this.leagues.length;
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.countOfLeagues) {
      endIndex = this.countOfLeagues;
    }
    this.getSliceLeagues(startIndex, endIndex);
  }
}
