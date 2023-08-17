import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

import { CompetitionsService } from '../../shared/services/competitions.service';
import { LeagueInterface } from '../../shared/types/league.interface';
import { MockLeagues } from '../../shared/mocks/league-mock';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  public leagues: LeagueInterface[];

  public collectionSize: number;

  public page: number;

  public itemsPerPage = 10;

  public subs: Subscription[] = [];

  public searchText: string;

  constructor(private competitionService: CompetitionsService) {
    this.leagues = MockLeagues;
    this.page = 1;
    this.loadPage();
  }

  ngAfterViewInit(): void {
    const sub = this.paginator.page
      .pipe(tap(() => this.loadPage()))
      .subscribe();
    this.subs.push(sub);
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  onPageChanged(): void {
    this.loadPage();
  }

  trackByFunc(index: number, item: LeagueInterface) {
    return item.id;
  }

  private loadPage() {
    const subForPageElems = this.competitionService
      .getLeagues(this.paginator?.pageIndex ?? 1, this.itemsPerPage)
      .subscribe((page) => {
        this.leagues = page;
        this.collectionSize = this.competitionService.collectionSize;
      });
    this.subs.push(subForPageElems);
  }
}
