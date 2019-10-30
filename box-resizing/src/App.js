import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 300,
      height: 300
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-container">
            <div
              className="dynamic-div-element"
              style={{
                width: this.state.width + "px",
                height: this.state.height + "px"
              }}
            ></div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
