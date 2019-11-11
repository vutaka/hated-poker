import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GameCreate } from './presenter/pages/GameCreate';
import { GameCreateComplete } from './presenter/pages/GameCreateComplete';
import { GameJoin } from './presenter/pages/GameJoin';
import { GameJoinComplete } from './presenter/pages/GameJoinComplete';
import {MyInfoContextProvider} from './context/MyInfoContextProvider'
import { GamePlay } from './presenter/pages/GamePlay';

function App() {
  return (
    <MyInfoContextProvider>
      <BrowserRouter>
        <Route exact path={["/", "/create"]} component={GameCreate} />
        <Route exact path={"/create/:gameId"} component={GameCreateComplete} />
        <Route exact path={"/join/:gameId"} component={GameJoin} />
        <Route exact path={"/join/:gameId/complete"} component={GameJoinComplete} />
        <Route exact path={"/play/:gameId"} component={GamePlay} />
      </BrowserRouter>
    </MyInfoContextProvider>
  );
}

export default App;
