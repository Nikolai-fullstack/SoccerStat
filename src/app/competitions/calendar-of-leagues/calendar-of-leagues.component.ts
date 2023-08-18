import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

import { CompetitionsService } from '../../shared/services/competitions.service';
import { MatchInterface } from '../../shared/types/match.interface';
import { MatchesMock } from '../../shared/mocks/matches-mock';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseMatchesInterface } from '../../shared/types/responses.interface';

@Component({
  selector: 'app-calendar-of-leagues',
  templateUrl: './calendar-of-leagues.component.html',
  styleUrls: ['./calendar-of-leagues.component.scss'],
})
export class CalendarOfLeaguesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  public id: number;

  public name: string;

  public mockData: MatchInterface[];

  displayedColumns = ['date-status', 'opponents', 'score'];

  subs: Subscription[];

  data = new MatTableDataSource<MatchInterface>(MatchesMock);

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    // this.competitionService
    //   .getCalendarOfLeague(this.id)
    //   .subscribe((dataSource: ResponseMatchesInterface) => {
    //     this.data = new MatTableDataSource(dataSource.matches);
    //     this.data.paginator = this.paginator;
    //   });
    this.competitionService.getCalendarOfLeague(this.id);
  }

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  // TODO: поиск по дате в moment.js есть методы для разницы между датами, используя .filter к this.data
  // searchMatchesWithDate() {
  //   this.data.filter(() => {})
  // }
}
