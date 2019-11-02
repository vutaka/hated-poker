import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GameCreate } from './container/pages/GameCreate';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "create"]} component={GameCreate} />
    </BrowserRouter>
  );
}

export default App;
