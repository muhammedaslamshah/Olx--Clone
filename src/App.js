import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import "./App.css";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Route path='/'>

        </Route>
        <Home />
      </Router>
    </div>
  );
}

export default App;
