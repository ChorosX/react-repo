/* global $ */
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
        <h1>ChorosX</h1>
      </div>
      <div class="clock">
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
        <h2>Menu</h2>
      </div>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
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

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<FaSatellite />}
            rightIcon={<ChevronIcon />}
            goToMenu="satellites"
          >
            Satellites
          </DropdownItem>

          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}></DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "satellites"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Choose A Satellite!</h2></DropdownItem>
          <DropdownItem>International Space Station</DropdownItem>
          <DropdownItem>Hubble Telescope</DropdownItem>
          <DropdownItem>TERRA</DropdownItem>
          <DropdownItem>GOES-12</DropdownItem>
          <DropdownItem>GOES-13</DropdownItem>
          <DropdownItem>Envisat</DropdownItem>
          <DropdownItem>Galaxy 14</DropdownItem>
          <DropdownItem>AGILE</DropdownItem>
          <DropdownItem>NOAA 19</DropdownItem>
          <DropdownItem>SUOMI NPP</DropdownItem>
          <DropdownItem>FUNcube-1</DropdownItem>
          <DropdownItem>FOX-1A</DropdownItem>
          <DropdownItem>OFEQ 11</DropdownItem>
          <DropdownItem>OZS 2</DropdownItem>
          <DropdownItem>VIASAT 2</DropdownItem>



        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
