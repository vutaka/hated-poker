export class Game {
  constructor(ownerName, playersNum, id = null) {
    this.ownerName = ownerName;
    this.playersNum = playersNum;
    this.id = id;
  }

  getOwnerName() {
    return this.ownerName;
  }

  getPlayersNum() {
    return this.playersNum;
  }

  getId() {
    return this.id;
  }
}