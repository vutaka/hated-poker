import { FirebaseDb } from "../infrastructure/driver/FirebaseDb";
import { Card } from "../domain/Card";
import cardSymbol from "../domain/CardSymbol"
import { GameStatus } from "../domain/GameStatus";

export class GameRepository {

  static register(game) {
    const dbRef = new FirebaseDb("game");
    return dbRef.register(game);
  }

  static find(gameId) {
    const dbRef = new FirebaseDb("game/" + gameId);
    return dbRef.readAll();
  }

  static addPlayer(gameId, player) {
    const dbRef = new FirebaseDb("game/" + gameId + "/players");
    return dbRef.register(player);
  }

  static listenPlayers(gameId, callback) {
    const dbRef = new FirebaseDb("game/" + gameId + "/players");
    dbRef.listenAllOnAdded(callback);
  }

  static offListenPlayers(gameId) {
    const dbRef = new FirebaseDb("game/" + gameId + "/players");
    dbRef.offListen();
  }

  static deliverCard(game) {
    const cards = this.createCardsDeck();
    while (cards.length > 0) {
      for (const key in game.players) {
        if (cards.length === 0) break;
        if (!game.players[key].hand) game.players[key].hand = [];
        game.players[key].hand.push(...cards.splice(0, 1));
      }
    }
  }

  static createCardsDeck() {
    const symbols = Object.entries(cardSymbol).map(([key, value]) => (key));
    const cards = [...new Array(64).keys()].map(i => new Card(symbols[i % symbols.length]));
    return cards.sort(() => [-1, 0, 1][Math.floor(Math.random() * Math.floor(3))]);
  }

  static updateGameForStart(gameId, game) {
    const dbRef = new FirebaseDb("game/" + gameId);
    game.status = new GameStatus();
    dbRef.update(game);
  }

  static listenStartGame(gameId, callback) {
    const dbRef = new FirebaseDb("game/" + gameId + "/status");
    dbRef.listenAllOnAdded(callback);
  }

  static offListenStartGame(gameId) {
    const dbRef = new FirebaseDb("game/" + gameId + "/status");
    dbRef.offListen();
  }
}