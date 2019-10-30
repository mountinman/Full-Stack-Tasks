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
  handleWidthChangeInput = e => {
    this.setState({ width: e.target.value });
  };
  handleHeightChangeInput = e => {
    this.setState({ height: e.target.value });
  };
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
            <div className="input-fields">
            <label>Width</label>
            <input
                type="number"
                min="1"
                max="500"
                value={this.state.width}
                onChange={this.handleWidthChangeInput}
              />
              <label>Height</label>
              <input
                type="number"
                min="1"
                max="500"
                value={this.state.height}
                onChange={this.handleHeightChangeInput}
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
