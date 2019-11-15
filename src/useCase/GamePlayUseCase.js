import { FirebaseDb } from "../infrastructure/driver/FirebaseDb";
import { Player } from "../domain/Player";
import { GameStatus } from "../domain/GameStatus";

export class GamePlayUseCase {

  static listenGamePlay(gameId, chagePlayers, changeStatus) {
    const playersRef = new FirebaseDb("/game/" + gameId + "/players");
    playersRef.listenAllOnAdded(chagePlayers);
    playersRef.listenAllOnChange(chagePlayers);
    const statusRef = new FirebaseDb("/game/" + gameId);
    statusRef.listenAllForChild("gameStatus", changeStatus);

  }
  static offListenGamePlay(gameId) {
    const playersRef = new FirebaseDb("/game/" + gameId + "/players");
    const statusRef = new FirebaseDb("/game/" + gameId + "/gameStatus");
    playersRef.offListen();
    statusRef.offListen();
  }

  static selectCard(cardIndex, player, status, playersDispatch, gameStatusDispatch) {
    if (Boolean(status.currentCard)) player.hand.push(status.currentCard);
    const selectedCard = player.hand.splice(cardIndex, 1);
    status.setCurrentCard(...selectedCard);
    playersDispatch([player.id, player]);
    gameStatusDispatch([null, status]);
  }

  static passCard(gameId, player, status, nextPlayerId, declarationSymbol) {
    const playersRef = new FirebaseDb("/game/" + gameId + "/players/" + player.id);
    const statusRef = new FirebaseDb("/game/" + gameId + "/gameStatus");
    status.order.push({ playerId: player.id, cardSymbol: declarationSymbol });
    status.currentPlayer = nextPlayerId;
    status.isGoThrough = false;
    playersRef.update(player);
    statusRef.update(status);
  }

  static believe(gameId, gameStatus) {
    this.checkCardSymbol(gameId, gameStatus, true);
  }

  static doubt(gameId, gameStatus) {
    this.checkCardSymbol(gameId, gameStatus, false);
  }

  static async checkCardSymbol(gameId, gameStatus, cardSymbolGuess) {
    const isTruth = gameStatus.currentCard.cardSymbol === gameStatus.order[gameStatus.order.length - 1].cardSymbol;
    const failurePlayerId = (isTruth === cardSymbolGuess) ? gameStatus.order[gameStatus.order.length - 1].playerId : gameStatus.currentPlayer;
    const playerRef = new FirebaseDb("/game/" + gameId + "/players/" + failurePlayerId);
    const player = Player.create(failurePlayerId, await playerRef.readAll());

    player.field.push(gameStatus.currentCard);
    const newStatus = new GameStatus(failurePlayerId);
    if (player.isDefeat()) newStatus.loser = {id: player.id, name: player.name};

    const statusRef = new FirebaseDb("/game/" + gameId + "/gameStatus");
    playerRef.update(player);
    statusRef.update(newStatus);
  }

  static async getLoser(gameId) {
    const loserRef = new FirebaseDb("/game/" + gameId + "/gameStatus/loser");
    return loserRef.readAll();
  }
}