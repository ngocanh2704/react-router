import React from 'react'
import { Link, Route } from 'react-router-dom';

const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? "active" : "";
          return (
            <li className={`my-li ${active}`}>
              <Link to={to}>{label}</Link>
            </li>
          );
        }}
      />
    );
  };

  export default CustomLink