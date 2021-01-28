import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import Index from "./components/pages/Index";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Home from "./components/pages/Home";
import AboutProject from "./components/pages/AboutProject";
import ContactArtists from "./components/pages/ContactArtists";
import Cello from "./components/pages/Cello";
import Soundtracks from "./components/pages/Soundtracks";
import Workshops from "./components/pages/Workshops";
import AboutCreator from "./components/pages/AboutCreator";
class App extends Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route path exact="./" component={TermsAndConditions} />
          <Route path="/home" component={Home} />
          <Route path="/performances-for-objects" component={AboutProject} />
          <Route path="/contact-artists" component={ContactArtists} />
          <Route path="/cello" component={Cello} />
          <Route path="/soundtracks" component={Soundtracks} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/about-creator" component={AboutCreator} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
