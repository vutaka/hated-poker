import { Game } from "../domain/Game";
import { GameRepository } from "../repository/GameRepository";
import { Player } from "../domain/Player";

export class GameCreateUseCase {

  static create(ownerName, playersNum) {
    const game = new Game(ownerName, playersNum);
    return GameRepository.register(game);
  }

  static load(gameId) {
    return GameRepository.readChild(gameId);
  }
  static join(gameId, name) {
    const player = new Player(name);
    return GameRepository.addPlayer(gameId, player);
  }
}