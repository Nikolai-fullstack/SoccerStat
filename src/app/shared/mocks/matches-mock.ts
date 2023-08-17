import { MatchInterface } from '../types/match.interface';

export const MatchesMock: MatchInterface[] = [
  {
    id: 327930,
    season: {
      id: 735,
      startDate: '2021-08-07',
      endDate: '2022-05-09',
      currentMatchday: 46,
    },
    utcDate: '2022-01-01T15:00:00Z',
    status: 'FINISHED',
    matchday: 26,
    stage: 'REGULAR_SEASON',
    group: null,
    lastUpdated: '2022-07-04T08:20:17Z',
    odds: {
      msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
    },
    score: {
      winner: 'HOME_TEAM',
      duration: 'REGULAR',
      fullTime: {
        homeTeam: 1,
        awayTeam: 0,
      },
      halfTime: {
        homeTeam: 1,
        awayTeam: 0,
      },
      extraTime: {
        homeTeam: null,
        awayTeam: null,
      },
      penalties: {
        homeTeam: null,
        awayTeam: null,
      },
    },
    homeTeam: {
      id: 336,
      name: 'Blackpool FC',
    },
    awayTeam: {
      id: 322,
      name: 'Hull City AFC',
    },
    referees: [],
  },
  {
    id: 327928,
    season: {
      id: 735,
      startDate: '2021-08-07',
      endDate: '2022-05-09',
      currentMatchday: 46,
    },
    utcDate: '2022-01-02T13:00:00Z',
    status: 'FINISHED',
    matchday: 26,
    stage: 'REGULAR_SEASON',
    group: null,
    lastUpdated: '2022-07-04T08:20:17Z',
    odds: {
      msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
    },
    score: {
      winner: 'HOME_TEAM',
      duration: 'REGULAR',
      fullTime: {
        homeTeam: 3,
        awayTeam: 2,
      },
      halfTime: {
        homeTeam: 1,
        awayTeam: 2,
      },
      extraTime: {
        homeTeam: null,
        awayTeam: null,
      },
      penalties: {
        homeTeam: null,
        awayTeam: null,
      },
    },
    homeTeam: {
      id: 387,
      name: 'Bristol City FC',
    },
    awayTeam: {
      id: 384,
      name: 'Millwall FC',
    },
    referees: [],
  },
  {
    id: 327921,
    season: {
      id: 735,
      startDate: '2021-08-07',
      endDate: '2022-05-09',
      currentMatchday: 46,
    },
    utcDate: '2022-01-02T14:00:00Z',
    status: 'FINISHED',
    matchday: 26,
    stage: 'REGULAR_SEASON',
    group: null,
    lastUpdated: '2022-07-04T08:20:17Z',
    odds: {
      msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
    },
    score: {
      winner: 'DRAW',
      duration: 'REGULAR',
      fullTime: {
        homeTeam: 1,
        awayTeam: 1,
      },
      halfTime: {
        homeTeam: 0,
        awayTeam: 1,
      },
      extraTime: {
        homeTeam: null,
        awayTeam: null,
      },
      penalties: {
        homeTeam: null,
        awayTeam: null,
      },
    },
    homeTeam: {
      id: 74,
      name: 'West Bromwich Albion FC',
    },
    awayTeam: {
      id: 715,
      name: 'Cardiff City FC',
    },
    referees: [],
  },
];
