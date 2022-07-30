import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './login/pages/Login';
import Dashboard from './CoreUI/pages/Dashboard';
import MyProfile from './CoreUI/pages/MyProfile';
import PersionalInfo from './CoreUI/pages/PersionalInfo';

import './App.css';

function App() {
  return (
    <div className='bg-alto mx-auto h-screen relative flex flex-col items-center justify-center px-3 py-3 md:h-abc md:w-abc md:rounded-xl'>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;