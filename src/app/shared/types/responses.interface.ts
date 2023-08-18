import { LeagueInterface } from './league.interface';
import { MatchInterface } from './match.interface';

export interface ResponseLeaguesInterface {
  competitions: LeagueInterface[];
  count: number;
  filters: object;
}

export interface ResponseMatchesInterface {
  count: number;
  filters: object;
  competition: object;
  matches: MatchInterface[];
}
