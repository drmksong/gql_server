import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation></MainNavigation>
          <main className="main-content">
            <Switch>
              <Redirect from ="/" to = "/auth" exact> </Redirect>
              <Route path="/auth" component={AuthPage}></Route>
              <Route path="/bookings" component={BookingsPage}></Route>
              <Route path="/events" component={EventsPage}></Route>
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }

}

export default App;
