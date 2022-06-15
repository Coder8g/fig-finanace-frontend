import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainComponent from './components/Main/Main';

import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={MainComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
