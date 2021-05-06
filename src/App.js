import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Login from './components/auth/Login';
//import SignUp from './components/auth/SignUp';
import Dashboard from './components/Dashboard';


function App() {
  return (
      <Router>
        <Switch>
          {/*<Route exact path={["/login", "/"]}component={Login}/>*/}
          {/*<Route exact path="/signup" component={SignUp}/>*/}
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
  );
}

export default App;
