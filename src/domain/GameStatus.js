export class GameStatus {
  constructor(currentPlayer = "", currentCard = "", order = [],loser = "") {
    this.currentPlayer = currentPlayer;
    this.currentCard = currentCard;
    this.order = order;
    this.loser = loser;
  }

  static create({currentCard, order, currentPlayer, loser}) {
    return new GameStatus(currentPlayer, currentCard, order,loser);
  }

  setCurrentCard(card) {
    this.currentCard = card;
  }

  isFirst() {
    return this.order.length === 0;
  }

}