import React, { useState, useCallback, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './login/pages/Login';
import Dashboard from './CoreUI/pages/Dashboard';
import MyProfile from './CoreUI/pages/MyProfile';
import PersionalInfo from './CoreUI/pages/PersionalInfo';
import Logout from './CoreUI/pages/Logout';
import PasswordReset1 from './CoreUI/pages/PasswordReset1';
import PasswordReset2 from './CoreUI/pages/PasswordReset2';
import PasswordReset3 from './CoreUI/pages/PasswordReset3';
import { AuthContext } from './shared/context/auth-context';

import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routeList;

  if (isLoggedIn) {
    routeList = (
      <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/dashboard" exact>
              <Dashboard />
          </Route>
          <Route path="/profile" exact>
              <MyProfile />
          </Route>
          <Route path="/profileInfo" exact>
              <PersionalInfo />
          </Route>
          <Route path="/logout" exact>
              <Logout />
          </Route>
          <Route path="/pwdReset1" exact>
              <PasswordReset1 />
          </Route>
          <Route path="/pwdReset2" exact>
              <PasswordReset2 />
          </Route>
          <Route path="/pwdReset3" exact>
              <PasswordReset3 />
          </Route>
          <Redirect to="/" />
      </Switch>
    );
  } else {
    routeList = (
      <Switch>
          <Route path="/" exact>
              <Login />
          </Route>
          <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      <div className='bg-alto mx-auto h-screen relative flex flex-col items-center justify-center px-3 py-3 md:h-abc md:w-abc md:rounded-lg'>
        <Router>
            {routeList}
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;