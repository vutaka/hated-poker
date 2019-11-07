export class Player {
  constructor(name = "", id = null) {
    this.name = name;
    this.id = id;
    this.hand = null;
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
}