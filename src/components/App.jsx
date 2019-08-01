import React from "react";
import "./App.css";
import Form from "./app_component/form.component";
import Weather from "./app_component/weather.component";
import Cat from "./app_component/cat.component";
import "bootstrap/dist/css/bootstrap.min.css";

const OW_API_KEY = "6d6260d419bc9ac46ba23a45a6e9af62";

class App extends React.Component {
  constructor() {
    super();

    };

    // rendering of components text to go here

  render() {
    return (
      <div className="App">
        <Form />
        <Weather />
        <Cat />
      </div>
    );
  }
}

export default App;