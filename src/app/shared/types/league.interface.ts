export interface LeagueInterface {
  id: number;
  area: Area;
  name: string;
  code: string | null;
  emblemUrl: string | null;
  plan: string;
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}

interface Area {
  id: number;
  name: string;
  countryCode: string;
  ensignUrl: string | null;
}

interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number | null;
  winner: Winner | null;
}

interface Winner {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
}
