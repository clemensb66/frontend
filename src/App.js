import React, { Component } from 'react';
import {Route,  BrowserRouter as Router, Switch} from 'react-router-dom';
import LetterOfCredit from './LetterOfCredit';
import Home from './Home';

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <Router /*basename={window.location.pathname || ''}*/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/home' exact={true} component={Home}/>
          <Route path='/letters/' exact={true} component={LetterOfCredit}/>
        </Switch>
      </Router>
     );
  }
}
 
export default App;
