import { firebaseApp } from "../config/firebase"

export class FirebaseDb {
  constructor(refName) {
    this.ref = firebaseApp.database().ref(refName);
  }

  async register(obj) {
    const id = await this.ref.push(obj).key;
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

  listenAllOnAdded(callback) {
    this.ref.on("child_added", (newSnapshot) => {
      callback([newSnapshot.key, newSnapshot.val()]);
    })
  }

  /**
   * データの変更を監視する。
   * 変更された場合callbackに変更されたデータの[key, value]を渡す。
   * @param {Function} callback 
   */
  listenAllOnChange(callback) {
    this.ref.on("child_changed", (newSnapshot) => {
      callback([newSnapshot.key, newSnapshot.val()]);
    })
  }

  update(obj) {
    this.ref.update(obj);
  }

  offListen() {
    this.ref.off();
  }
}