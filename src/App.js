import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import AboutProject from "./components/pages/AboutProject";
import ContactArtists from "./components/pages/ContactArtists";
import Soundtracks from "./components/pages/Soundtracks";
import Workshops from "./components/pages/Workshops";
import AboutCreator from "./components/pages/AboutCreator";
import Home2 from "./components/pages/Home2";
import OtherIdeas from "./components/pages/OtherIdeas";
class App extends Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route path exact="./" component={TermsAndConditions} />
          <Route path="/performances-for-objects" component={AboutProject} />
          <Route path="/contact-artists" component={ContactArtists} />
          <Route path="/soundtracks" component={Soundtracks} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/about-creator" component={AboutCreator} />
          <Route path="/home" component={Home2} />
          <Route path="/more-ideas" component={OtherIdeas} />
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
