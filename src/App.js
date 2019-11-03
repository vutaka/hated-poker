import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GameCreate } from './presenter/pages/GameCreate';
import { GameCreateComplete } from './presenter/pages/GameCreateComplete';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/create"]} component={GameCreate} />
      <Route exact path={"/create/:gameId"} component={GameCreateComplete} />
    </BrowserRouter>
  );
}

export default App;
