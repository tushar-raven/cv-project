import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div>CV Creator</div>
        </div>
        <Form />
      </>
    );
  }
}

export default App;
