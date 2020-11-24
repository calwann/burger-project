import React from "react";

import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className="Toolbar">
    <div className="DrawerToggle" onClick={props.opened}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="LogoToolbar">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
