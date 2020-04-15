import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Contact from "./navbar/Contact";
import About from "./navbar/About";
import Home from "./todos/Home";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
