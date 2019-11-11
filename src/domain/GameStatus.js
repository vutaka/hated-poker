export class GameStatus {
  constructor(currentPlayer = "", currentCard = "", order = [], loser = "", isGoThrough = false) {
    this.currentPlayer = currentPlayer;
    this.currentCard = currentCard;
    this.order = order;
    this.loser = loser;
    this.isGoThrough = isGoThrough;
  }

  static create({ currentCard, order, currentPlayer, loser, isGoThrough }) {
    return new GameStatus(currentPlayer, currentCard, order, loser, isGoThrough);
  }

  setCurrentCard(card) {
    this.currentCard = card;
  }

  isFirst() {
    return this.order.length === 0;
  }
  isGoThrough() {
    return this.isGoThrough;
  }
}