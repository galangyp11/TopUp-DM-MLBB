import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './components/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
