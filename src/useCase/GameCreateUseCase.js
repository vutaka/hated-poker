import { Game } from "../domain/Game";
import { Player } from "../domain/Player";
import { FirebaseDb } from "../infrastructure/driver/FirebaseDb";
import cardSymbol from "../domain/CardSymbol";
import { Card } from "../domain/Card";
import { GameStatus } from "../domain/GameStatus";

export class GameCreateUseCase {

  static join(gameId, name) {
    const player = new Player(name);
    const dbRef = new FirebaseDb("game/" + gameId + "/players");
    return dbRef.register(player);
  }

  static async create(ownerName, playersNum) {
    const game = new Game(ownerName, playersNum);
    const dbRef = new FirebaseDb("game");
    const gameId = await dbRef.register(game);
    const myId = await this.join(gameId, ownerName);
    return [gameId, myId];
  }

  static load(gameId) {
    const dbRef = new FirebaseDb("game/" + gameId);
    return dbRef.readAll();
  }

  static listenPlayer(gameId, callback) {
    const dbRef = new FirebaseDb("game/" + gameId + "/players");
    dbRef.listenAllOnAdded(callback);
  }

  static offListenPlayer(gameId) {
    const dbRef = new FirebaseDb("game/" + gameId + "/players");
    dbRef.offListen();
  }

  static async startGame(gameId, firstPlayerId, callback) {
    const game = await this.load(gameId);
    this.deliverCard(game);
    const dbRef = new FirebaseDb("game/" + gameId);
    const gameStatus = new GameStatus(firstPlayerId);
    game.gameStatus = gameStatus;
    return await dbRef.update(game);
  }

  static listenStartGame(gameId, callback) {
    const dbRef = new FirebaseDb("game/" + gameId + "/gameStatus");
    dbRef.listenAllOnAdded(callback);
  }

  static offListenStartGame(gameId) {
    const dbRef = new FirebaseDb("game/" + gameId + "/gameStatus");
    dbRef.offListen();
  }

  static listenReStartGame(gameId, callback) {
    const dbRef = new FirebaseDb("game/" + gameId + "/gameStatus/loser");
    dbRef.listenAllOnDelete(callback);
  }

  static offListenReStartGame(gameId) {
    const dbRef = new FirebaseDb("game/" + gameId + "/gameStatus/loser");
    dbRef.offListen();
  }

  static deliverCard(game) {
    // ゲームが2回目の時手札と場がすでにあるため初期化する。
    Object.entries(game.players).forEach(([key, player]) => {
      player.field = [];
      player.hand = [];
    });
    const symbols = Object.entries(cardSymbol).map(([key, value]) => (key));
    const cards = [...new Array(64).keys()].map(i => new Card(symbols[i % symbols.length]));
    cards.sort(() => [-1, 0, 1][Math.floor(Math.random() * Math.floor(3))]);
    while (cards.length > 0) {
      for (const key in game.players) {
        if (cards.length === 0) break;
        game.players[key].hand.push(...cards.splice(0, 1));
      }
    }
  }

}