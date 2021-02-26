import React from "react";
import popUp from "../stylesheets/popUp.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <div className="popupText">
            <h1>{this.props.text}</h1>
          </div>
          <div className="popupButton">
            {" "}
            <button onClick={() => window.open("/home")}>OK</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
