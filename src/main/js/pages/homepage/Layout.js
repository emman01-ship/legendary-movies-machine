import React from 'react';
import { Outlet, Link } from "react-router-dom";

/* table-next dependency has also caused issues with CSS
  to use css with webpack, CSS loader is needed and when trying to install through 
  package.json or npm install it causes error. 
*/
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
              <Link to="/recommend">Suggest Movie For Me</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;