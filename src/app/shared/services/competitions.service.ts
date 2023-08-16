import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CompetitionsService {
  public collectionSize: number;

  constructor(private http: HttpClient) {
    this.collectionSize = 0;
  }

  getLeagues(page: number, itemsPerPage: number): Observable<any> {
    const leagues = this.http
      .get('http://api.football-data.org/v2/competitions/')
      .pipe(
        tap((res) => {
          console.log('res', res);
          this.collectionSize = 173;
        }),
      );
    return this.getPageItems(leagues, page, itemsPerPage);
  }

  getCalendarOfLeague(id: number) {
    return this.http.get(
      `http://api.football-data.org/v2/competitions/${id}/matches`,
    );
  }

  private getPageItems(
    collection: Observable<any>,
    page: number,
    itemsPerPage: number,
  ) {
    return collection.pipe(
      map((res) => {
        const startIndex = itemsPerPage * (page - 1);
        return res.competitions.slice(startIndex, startIndex + itemsPerPage);
      }),
    );
  }
}
