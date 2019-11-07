import { Game } from "../domain/Game";
import { GameRepository } from "../repository/GameRepository";
import { Player } from "../domain/Player";

export class GameCreateUseCase {

  static async create(ownerName, playersNum) {
    const game = new Game(ownerName, playersNum);
    const gameId = await GameRepository.register(game);
    const myId = await this.join(gameId, ownerName);
    return [gameId, myId];
  }

  static load(gameId) {
    return GameRepository.find(gameId);
  }

  static join(gameId, name) {
    const player = new Player(name);
    return GameRepository.addPlayer(gameId, player);
  }

  static listenPlayer(gameId, callback) {
    GameRepository.listenPlayers(gameId, callback);
  }

  static offListenPlayer(gameId) {
    GameRepository.offListenPlayers(gameId);
  }

  static async startGame(gameId) {
    const game = await this.load(gameId);
    GameRepository.deliverCard(game);
    GameRepository.updateGameForStart(gameId, game);
  }

  static listenStartGame(gameId, callback) {
    GameRepository.listenStartGame(gameId, callback);
  }
  static offListenStartGame(gameId) {
    GameRepository.offListenStartGame(gameId);
  }

}