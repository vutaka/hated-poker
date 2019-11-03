import { FirebaseDb } from "../infrastructure/driver/FirebaseDb";
import { Game } from "../domain/Game";

export class GameRepository {
  
  /**
   * Gameを登録する
   * @param {Game} game 
   */
  static register(game) {
    const db = new FirebaseDb("game");
    return db.register(game);
  }
}