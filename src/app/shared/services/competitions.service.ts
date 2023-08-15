import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompetitionsService {
  constructor(private http: HttpClient) {}

  getLeagues() {
    return this.http.get('http://api.football-data.org/v2/competitions/');
  }

  getCalendarOfLeague(id: number) {
    return this.http.get(
      `http://api.football-data.org/v2/competitions/${id}/matches`,
    );
  }
}
