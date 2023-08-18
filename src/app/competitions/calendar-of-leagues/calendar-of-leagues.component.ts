import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CompetitionsService } from '../../shared/services/competitions.service';
import { MatchInterface } from '../../shared/types/match.interface';
import { MatchesMock } from '../../shared/mocks/matches-mock';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-calendar-of-leagues',
  templateUrl: './calendar-of-leagues.component.html',
  styleUrls: ['./calendar-of-leagues.component.scss'],
})
export class CalendarOfLeaguesComponent implements OnInit, OnDestroy {
  public id: number;

  public name: string;

  public data: any;

  public mockData: MatchInterface[];

  subs: Subscription[];

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private activateRoute: ActivatedRoute,
    private competitionService: CompetitionsService,
  ) {
    this.mockData = MatchesMock;
    this.id = activateRoute.snapshot.params['id'];
    this.name = activateRoute.snapshot.queryParams['name'];
    breadcrumbService.set('@name', this.name);
  }

  ngOnInit() {
    this.competitionService
      .getCalendarOfLeague(this.id)
      .subscribe((dataSource) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.data = new MatTableDataSource(dataSource);
        this.data.paginator = this.paginator;
      });
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
