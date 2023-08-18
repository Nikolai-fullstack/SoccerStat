import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ResponseLeaguesInterface,
  ResponseMatchesInterface,
} from '../types/responses.interface';

@Injectable({ providedIn: 'root' })
export class CompetitionsService {
  constructor(private http: HttpClient) {}

  getLeaguesApi() {
    return this.http.get<ResponseLeaguesInterface>(
      'http://api.football-data.org/v2/competitions',
    );
  }

  getCalendarOfLeague(id: number) {
    return this.http.get<ResponseMatchesInterface>(
      `http://api.football-data.org/v2/competitions/${id}/matches`,
    );
  }
}
