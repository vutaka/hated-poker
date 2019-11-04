export class Game {
  constructor(ownerName, playersNum) {
    this.playersNum = playersNum;
    this.ownerName = ownerName;
    this.players = {aa: "あああ"};
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