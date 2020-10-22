export type Player = object & {
  id: string;
  firstname: string;
  lastname: string;
  position: number;
  ultraPosition: number;
  teamId: number;
  quotation: number;
  club: string;
  stats: PlayerStats;
};

export type PlayerStats = {
  avgRate: number;
  sumGoals: number;
  currentChampionship: number;
  percentageStarter: number;
};

export type UltraPositionsMapping = {
  [index: number]: string;
};

export type PlayerDetails = Player & {
  calendar: any;
  championships: {
    [index: number]: PlayerChampionships;
  };
  nbMatch: number;
  teamId: number;
  type: string;
  updatedAt: Date;
  active: number;
  birthDate: Date;
  championship: number;
  jerseyNum: string;
  joinDate: Date;
  twitter: string;
  availableSeasons: string[];
  stats: PlayerDetailedStats;
};

export type PlayerChampionships = {
  active: number;
  availableSince: Date;
  championship: number;
  club: string;
  joinDate: Date;
  quotation: number;
  teamId: string;
};

export type PlayerDetailedStats = {
  appearances: {
    standBy: 0;
    standIn: 0;
    starter: 17;
    total: 17;
  };
  avgRate: 5.6;
  currentChampionship: 1;
  goalsConcededByMatch: 1.1;
  id: 'player_4126_stats_2018';
  lastFiveRate: PlayerLastFiveMatchesRate;
  matches: PlayerMatch[];
  percentageSaveShot: 74;
  percentageStarter: 0.45;
  sumCleanSheet: 6;
  sumDeflect: 20;
  sumGoals: 0;
  sumPenaltyFaced: 2;
  sumPenaltySave: 1;
  sumRedCard: 0;
  sumSaves: 51;
  sumYellowCard: 0;
};

export type PlayerLastFiveMatchesRate = {
  [index: string]: {
    day: number;
    matchId: string;
  };
};

export type PlayerMatch = {
  date: Date;
  day: number;
  id: string;
  info: {
    goals: number;
    minsPlayed: number;
    rate: number;
    sub: number;
  };
  score: {
    away: number;
    home: number;
    scoreAway: number;
    scoreHome: number;
  };
  stats: {
    clean_sheet: number;
    dive_save: number;
    error_lead_to_goal: number;
    goals_conceded: number;
    penalty_faced: number;
    penalty_save: number;
    red_card: number;
    saves: number;
    stand_save: number;
    yellow_card: number;
  };
};
