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

  static selectCard(gameId, player, cardIndex, status) {
    const selectedCard = player.hand.splice(cardIndex, 1);
    //status.order.push({player.id, });
    status.setCurrentCard(selectedCard);
    const playersRef = new FirebaseDb("/game/" + gameId + "/players/" + player.id);
    const statusRef = new FirebaseDb("/game/" + gameId + "/gameStatus");
    playersRef.update(player);
    statusRef.update(status);
  }
}