import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './login/pages/Login';

import './App.css';

function App() {
  return (
    <div className='bg-alto mx-auto h-screen relative flex flex-col items-center justify-center p-6 md:h-abc md:w-abc md:rounded-xl'>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;