import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import BreweryState from "./context/brewery/BreweryState";
import AlertState from "./context/alert/AlertState";

//Styling
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Background from "./beerbarrel.jpg";

function App() {
  return (
    <AlertState>
      <BreweryState>
        <Router>
          <div className="App">
            <Navbar title="Brewery Search" icon="fa fa-beer" />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </BreweryState>
    </AlertState>
  );
}

const styles = {
  backgroundImage: `url(${Background})`
};

export default App;
