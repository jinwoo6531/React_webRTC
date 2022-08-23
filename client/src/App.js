import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateRoom from './routes/CreateRoom';
import Room from './routes/Room';
import './App.css';
import Jinwoo from './routes/Jinwoo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
          <Route path="/jinwoo" exact component={Jinwoo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
