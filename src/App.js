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
import Home2 from "./components/pages/Home2";
import Home3 from "./components/pages/Home3";
class App extends Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route path exact="./" component={TermsAndConditions} />
          <Route path="/home" component={Home} />
          <Route path="/performances-for-objects" component={AboutProject} />
          <Route path="/contact-artists" component={ContactArtists} />
          <Route path="/home1" component={Cello} />
          <Route path="/soundtracks" component={Soundtracks} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/about-creator" component={AboutCreator} />
          <Route path="/home2" component={Home2} />
          <Route path="/home3" component={Home3} />
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
