import React from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
      
      <Route path="/Checkout">
      <Checkout/>
      </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/">
      <Home />
      <Footer/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
