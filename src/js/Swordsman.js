import Character from './Character';

export default class Swordsman extends Character {
  constructor(type) {
    super(type);
    this.type = 'swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
