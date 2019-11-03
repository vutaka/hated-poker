export class Game {
  constructor(ownerName, playersNum) {
    this.playersNum = playersNum;
    this.ownerName = ownerName;
  }

  getId() {
    return this.id;
  }

  getPlayers() {
    return this.players;
  }

  getPlayersNum() {
    return this.playersNum;
  }
}