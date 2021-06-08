import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

  const Navbar = ({ links }) => {
    return(
    <Router>
      <div>
        <nav>
          <ul>
            {links.map(link => (
                    <li>
                    <Link style={{ color: `black` }} to={link.link}> {link.name} </Link>
                    </li>
                ))}
          </ul>
        </nav>
      </div>
    </Router>
    )
}


export {Navbar}