import { firebaseApp } from "../config/firebase"

export class FirebaseDb {
  constructor(refName) {
    this.ref = firebaseApp.database().ref(refName);
  }

  async register(game) {
    const id = await this.ref.push(game).key;
    return id;
  }

  async readAll() {
    const result = await this.ref.once("value");
    return result.val();
  }

  async readChild(childId) {
    const result = await this.ref.child(childId).once("value");
    return result.val();
  }
}