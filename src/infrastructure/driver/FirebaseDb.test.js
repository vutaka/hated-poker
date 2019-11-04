import { FirebaseDb } from "./FirebaseDb"

test("read and write", async () => {
  const db = new FirebaseDb('test');
  // const game = new Game("テスト");
  const id = await db.register("ほげ");
  await expect(db.readChild(id)).resolves.toMatch("ほげ");
})

