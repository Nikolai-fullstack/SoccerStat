import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, from } from 'rxjs';

import { LeagueInterface } from '../types/league.interface';
import { ResponseLeaguesInterface } from '../types/responses.interface';
import { ResponseWithMockLeagues } from '../mocks/response-leagues-mock';

@Injectable({ providedIn: 'root' })
export class CompetitionsService {
  public collectionSize: number;

  constructor(private http: HttpClient) {
    this.collectionSize = 0;
  }

  getLeagues(
    page: number,
    itemsPerPage: number,
  ): Observable<LeagueInterface[]> {
    // const leagues = this.http
    //   .get<ResponseLeaguesInterface>(
    //     'http://api.football-data.org/v2/competitions/',
    //   )
    //   .pipe(
    //     tap((res) => {
    //       this.collectionSize = res.count;
    //     }),
    //   );
    const leagues = from(new Array(ResponseWithMockLeagues));
    this.collectionSize = ResponseWithMockLeagues.count;
    return this.getPageItems(leagues, page, itemsPerPage);
  }

  getCalendarOfLeague(id: number) {
    return this.http.get(
      `http://api.football-data.org/v2/competitions/${id}/matches`,
    );
  }

  private getPageItems(
    collection: Observable<ResponseLeaguesInterface>,
    page: number,
    itemsPerPage: number,
  ): Observable<LeagueInterface[]> {
    return collection.pipe(
      map((res: ResponseLeaguesInterface) => {
        const startIndex = itemsPerPage * (page - 1);
        return res.competitions.slice(startIndex, startIndex + itemsPerPage);
      }),
    );
  }
}
