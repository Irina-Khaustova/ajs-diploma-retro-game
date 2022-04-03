import Character from './Character';

export default class Bowman extends Character {
  constructor(type) {
    super(type);
    this.type = 'bowman';
    this.defence = 25;
    this.attack = 25;
  }
}
