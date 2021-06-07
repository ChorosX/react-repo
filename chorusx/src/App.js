import "./index.css";
import { ReactComponent as CaretIcon } from "./icons/caret.svg"; // arrow down
import { ReactComponent as CogIcon } from "./icons/cog.svg"; // settings
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg"; // settings
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg"; // arrow
import { FaSatellite } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactAwesomeClock from "react-awesome-clock";


function App() {
  return (
    <Navbar>
     <div id="header">
          <h1>ChórosX</h1>
        </div>
        <div className="clock">
          <ReactAwesomeClock
            style={{
              color: "white",
              fontSize: 30,
              textShadow: "0 0 0 grey",
              fontFamily: "Righteous, serif",
            }}
          />
        </div>
        <div>
          <h2>MataHacks2021</h2>
        </div>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button-main" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default App;
