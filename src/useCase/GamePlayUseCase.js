import { FirebaseDb } from "../infrastructure/driver/FirebaseDb";

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

  static selectCard(cardIndex, player, status, playersDispatch, gameStatusDispatch ) {
    if(Boolean(status.currentCard)) player.hand.push(status.currentCard);
    const selectedCard = player.hand.splice(cardIndex, 1);
    status.setCurrentCard(...selectedCard);
    playersDispatch([player.id, player]);
    gameStatusDispatch([null, status]);
  }

  static passCard(gameId, player, status, nextPlayerId, declarationSymbol) {
    const playersRef = new FirebaseDb("/game/" + gameId + "/players/" + player.id);
    const statusRef = new FirebaseDb("/game/" + gameId + "/gameStatus");
    status.order.push({playerId: player.id, cardSymbol: declarationSymbol});
    status.currentPlayer = nextPlayerId;
    status.isGoThrough = false;
    playersRef.update(player);
    statusRef.update(status);
  }
}