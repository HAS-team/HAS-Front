import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Login from './Login.jsx';
import Apply from './Common/Component/Apply/Apply';
import LectContain from './Common/Component/LectContain';
import Header from './Common/Component/Header/Header.jsx';

function App() {
  return (
    <div style={{ height: '100%' }}>
      {/* <h1>App page</h1> */}
      <Header />
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Login} exact={true} isLogin={'123123'} />
           */}
          <Route path="/" render={() => <Login isLogin={123} />} />
          <Route path="/apply" component={Apply} exect={true} />
          <Route path="/lect/:usermod" component={LectContain} exact={true} />
          <Route
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다: </h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
