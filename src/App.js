import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";

const showContainMenus = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return result;
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu */}
        {/* <nav className="navbar navbar-inverse"> */}
        {Menu}
        {/* Nội dung */}
        <Switch>{showContainMenus(routes)}</Switch>
      </div>
    </Router>
  );
}

export default App;
