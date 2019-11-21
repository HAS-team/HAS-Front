import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login.jsx';

import Header from './Common/Component/Header/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      {/* <h1>App page</h1> */}
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
