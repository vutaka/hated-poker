import { firebaseApp } from "../config/firebase"

export class FirebaseDb {
  constructor(refName) {
    this.ref = firebaseApp.database().ref(refName);
  }

  async register(game) {
    const id = await this.ref.push(game).key;
    return id;
  }

  async read(id) {
    const result = await this.ref.child(id).once("value");
    return result.val();
  }
}