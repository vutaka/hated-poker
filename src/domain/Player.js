import cardSymbol from "./CardSymbol";

export class Player {
  constructor(name = "", id = "", hand = [], field = []) {
    this.name = name;
    this.id = id;
    this.hand = hand;
    this.field = field;
  }
  static create(id, {name, hand, field}) {
    return new Player(name, id, hand, field);
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  setHand(hand){
    this.hand = hand;
  }
  setField(field){
    this.field = field;
  }
  isDefeat() {
    const cardSymbolNames = this.field.map(card => card.cardSymbol);
    for (const key in cardSymbol) {
      let count = 0;
      cardSymbolNames.filter(element => (element === key)).forEach(() => count++);
      if(count >= 4) return true;
    }
    return false;
  }
}