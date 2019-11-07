export class Card {
  constructor(cardSymbol) {
    this.cardSymbol = cardSymbol;
  }
  getCardSymbol() {
    return this.cardSymbol;
  }
  valueOf() {
    return this.getCardSymbol();
  }
}