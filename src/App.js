import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import {Switch, Route} from 'react-router-dom';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import {Provider} from './context/Context';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider>
        <Navbar />
        <div className="container">

        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/lyrics/track/:id" component={Lyrics} />

        </Switch>
        </div>
        </Provider>
        
      </React.Fragment>
    )
  }
}
export default App;


// REACT_APP_MM_KEY=1bf5f438377d96bc47697a769ad03880