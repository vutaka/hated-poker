import { Game } from "../domain/Game";
import { GameRepository } from "../repository/GameRepository";

export class GameCreateUseCase {
  constructor() {
    this.game = {};
  }
  create(ownerName, playersNum) {
    const game = new Game(ownerName, playersNum);
    return GameRepository.register(game);
  }
}