export interface MatchInterface {
  id: number;
  season: Season;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: number | null;
  lastUpdated: string;
  odds: Odds;
  score: Score;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  referees: unknown[];
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
}

export interface Odds {
  msg: string;
}

export interface Score {
  winner: string | null;
  duration: string;
  fullTime: FullTime;
  halfTime: HalfTime;
  extraTime: ExtraTime;
  penalties: Penalties;
}

export interface FullTime {
  homeTeam: number | null;
  awayTeam: number | null;
}

export interface HalfTime {
  homeTeam: number | null;
  awayTeam: number | null;
}

export interface ExtraTime {
  homeTeam: number | null;
  awayTeam: number | null;
}

export interface Penalties {
  homeTeam: number | null;
  awayTeam: number | null;
}

export interface HomeTeam {
  id: number;
  name: string;
}

export interface AwayTeam {
  id: number;
  name: string;
}
