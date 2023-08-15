import { LeagueInterface } from './league.interface';

export interface ResponseLeaguesInterface {
  competitions: LeagueInterface[];
  count: number;
  filters: object;
}
