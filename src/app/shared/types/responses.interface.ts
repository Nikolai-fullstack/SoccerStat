import { LeagueInterface } from './league.interface';
import { MatchInterface } from './match.interface';

export interface ResponseLeaguesInterface {
  competitions: LeagueInterface[];
  count: number;
  filters: object;
}

export interface ResponseMatchesInterface {
  count: 24;
  filters: object;
  competition: object;
  matches: MatchInterface[];
}
