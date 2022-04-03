import themes from './themes';
import { generateTeam } from './generators';
import Bowman from './Bowman';
import Magician from './Magician';
import Swordsman from './Swordsman';
import PositionedCharacter from './PositionedCharacter';
import GameState from './GameState';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.theme = themes.prairie;
    this.humanHeroes = [Bowman, Magician, Swordsman];
    this.compHeroes = [Bowman, Magician, Swordsman];
    this.teamComand = [];
    this.humanTeam = [];
    this.comTeam = [];
    this.gameState = [];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(this.theme);
    this.gamePlay.redrawPositions(this.startPosition(this.humanHeroes, this.compHeroes, 2));
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick);
    this.gamePlay.addCellLeaveListener(this.onCellLeave);
    //console.log(this.teamComand[0].health);
  }

  startPosition(band1, band2, count) {
    const arr = [];
    this.humanTeam = (generateTeam(band1, count));
    this.comTeam = (generateTeam(band2, count));
    //console.log(comTeam[0])
    const humanCharacter1 = new PositionedCharacter(this.humanTeam[0], 57);
    console.log(humanCharacter1.position)
    const humanCharacter2 = new PositionedCharacter(this.humanTeam[1], 56);
    const comTeam1 = new PositionedCharacter(this.comTeam[0], 62);
    const comTeam2 = new PositionedCharacter(this.comTeam[1], 63);
    //for (let i = 1; i <= count; i += 1) {
     // for (let j = 56; j < 56 + count; j += 1) {
       // const character = new PositionedCharacter(humanTeam[i], j);
      //arr.push(character);
      //console.log(arr)
   // }
  //}
    arr.push(humanCharacter1, humanCharacter2, comTeam1, comTeam2);
    this.teamComand = arr;
    console.log(this.teamComand[0].character.health)
    return arr;
  }

  onCellClick(index) {
    // TODO: react to click
    const cellClick = this.gamePlay.cells[index];
    for (let i = 1; i < this.humanTeam; i += 1) {
      if (this.humanTeam.includes(cellClick)) {
        for (let i = 1; i < this.teamComand; i += 1) {
          this.gameState.push(GameState(index))
        }
    }
    }

  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const cellEnter = this.gamePlay.cells[index];
    const medal = '\u{1F396}';
    const swords = '\u{2694}';
    const shield = '\u{1F6E1}';
    const heart = '\u{2764}';
    let message = '';
    if (cellEnter.querySelector('.character')) {
      for (let i = 0; i < this.teamComand.length; i += 1) {
        if (this.teamComand[i].position === index) {
          const char = this.teamComand[i].character;
          message = `${medal}${char.level}${swords}${char.attack}${shield}${char.defence}${heart}${char.health}`;
          this.gamePlay.showCellTooltip(message, index);
        }
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
