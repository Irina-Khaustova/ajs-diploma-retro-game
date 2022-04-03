import { generateTeam } from './generators';

export default class Team {
  constructor(teamSet, count) {
    this.team1 = generateTeam(teamSet, count);
  }
}
