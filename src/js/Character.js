export default class Character {
  constructor(type = '') {
    if (new.target === Character) {
      throw new Error('Объект был создан некорректно!');
    }
    this.type = type;
    this.health = 50;
    this.level = 1;
    // TODO: throw error if user use "new Character()"
  }

  levelUp() {
    this.level += 1;
    this.attack = Math.max(this.attack, (this.attack * (80 + this.health)) / 100);
    this.defence = Math.max(this.defence, (this.defence * (80 + this.health)) / 100);
    if (this.health >= 20) {
      this.health = 100;
    } else {
      this.health += 80;
    }
  }
}
