export class Player {
  constructor(name, id = null) {
    this.name = name;
    this.id = id;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
}