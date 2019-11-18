
# 何これ

ゴキ◯リポーカーの完全パクリゲーム

ルールは[リンク先参照](http://www.mobius-games.co.jp/DreiMagier/KakerLakenPoker.htm)

## このゲームで遊ぶ

1. [ここ](https://hated-poker.web.app/) にアクセスしてください。
2. あなたの名前とプレイしたい人数を入力して進んでください。
3. 表示されるURLを一緒にプレイする人へ送りつけてください。
4. 一緒にプレイする人が揃った時ゲームは始まります。
5. ゲームを開催した人からスタートです。
6. スタート時、画面上部に「行動」というボタンが表示されますがこれはバグです。構わずカードを選択してください。（以降のカード選択時にも表示されるが常に無視）
7. 良いゲームを！

* 現状バグだらけです。
* 本来は2人で遊ぶとき、ルールが変わるはずですが変わりません。変える予定もありません。
* 気づいたことや聞きたいことがあればissueに記載するか直接連絡をください。
* そのうちスマホ対応もします。

## 注意事項

以下のファイルをコミットしていません。
動かしたい場合自分でfirebaseの諸々の設定とかを行う必要があります。
`src/infrastructure/config/firebase.js`

上記ファイルの中身はこんな感じになります。

```JavaScript
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "xxxxx.firebaseapp.com",
  databaseURL: "https://xxxx.firebaseio.com",
  projectId: "xxxx",
  storageBucket: "xxxxx.appspot.com",
  messagingSenderId: "xxxxxxx",
  appId: "xxxxxxx",
  measurementId: "xxxxx"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
```

## やりたかったこと（バックログ）

[やりたかったことできてないことはこちら](./docs/やりたかったこと.md)

---

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

start storybook.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
