import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import Index from "./components/pages/Index";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Home from "./components/pages/Home";
import AboutProject from "./components/pages/AboutProject";
import WorldAround from "./components/pages/WorldAround";
import Cello from "./components/pages/Cello";
import Soundtracks from "./components/pages/Soundtracks";
import Recommendations from "./components/pages/Recommendations";
import AboutArtist from "./components/pages/AboutArtist";
class App extends Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route path exact="./" component={TermsAndConditions} />
          <Route path="/home" component={Home} />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/aboutproject" component={AboutProject} />
          <Route path="/theworldaroundsofa" component={WorldAround} />
          <Route path="/cello" component={Cello} />
          <Route path="/soundtracks" component={Soundtracks} />
          <Route path="/recommendations" component={Recommendations} />
          <Route path="/aboutartist" component={AboutArtist} />
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
