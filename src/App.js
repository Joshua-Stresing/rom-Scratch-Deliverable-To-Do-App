import './App.css';
import Auth from './Views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/auth';
import Todos from './Views/Todos/Todos';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            {currentUser ? <Todos /> : <Redirect to = "/auth"/>}
          </Route>
          <Route exact path = "/auth">
            <Auth setCurrentUser={setCurrentUser}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
