import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header-text">CV CREATOR</div>
        </div>
        <Form />
      </>
    );
  }
}

export default App;
