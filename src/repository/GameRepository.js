import { FirebaseDb } from "../infrastructure/driver/FirebaseDb";

export class GameRepository {

  static register(game) {
    const db = new FirebaseDb("game");
    return db.register(game);
  }

  static find(gameId) {
    const db = new FirebaseDb("game/" + gameId );
    return db.readAll();
  }

  static addPlayer(gameId, player) {
    const db = new FirebaseDb("game/" + gameId + "/players" );
    return db.register(player);
  }

  static listenPlayers(gameId, callback) {
    const db = new FirebaseDb("game/" + gameId + "/players" );
    db.listenAllOnAdded(callback);
  }
}