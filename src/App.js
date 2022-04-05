import './App.css';
import Auth from './Views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/auth';
import Todos from './Views/Todos/Todos';
import Header from './Views/Comp/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        <Switch>
          <Route exact path = "/">
            {currentUser ? <Todos /> : <Redirect to = "/auth"/>}
          </Route>
          <Route exact path = "/auth">
            {!currentUser ? <Auth setCurrentUser={setCurrentUser}/> : <Redirect to = "/"/>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
