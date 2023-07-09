import React, { Component, useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
      <div>
        <Personal />
        <Education />
      </div>
    );
  }
}

export default App;
