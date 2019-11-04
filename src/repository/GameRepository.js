import { FirebaseDb } from "../infrastructure/driver/FirebaseDb";

export class GameRepository {

  static register(game) {
    const dbRef = new FirebaseDb("game");
    return dbRef.register(game);
  }

  static find(gameId) {
    const dbRef = new FirebaseDb("game/" + gameId );
    return dbRef.readAll();
  }

  static addPlayer(gameId, player) {
    const dbRef = new FirebaseDb("game/" + gameId + "/players" );
    return dbRef.register(player);
  }

  static listenPlayers(gameId, callback) {
    const dbRef = new FirebaseDb("game/" + gameId + "/players" );
    dbRef.listenAllOnAdded(callback);
  }
}