import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = {
    links: [
      {
        title: "Home",
        path: "/"
      },
      {
        title: "About",
        path: "/about"
      },
      {
        title: "Profile",
        path: "/profile"
      },
      {
        title: "Contact",
        path: "/contact"
      },
      {
        title:"Login",
        path: "/login"
      }
    ],
    currentScreen: 'Home'
  };

  screenNameHandlder = currentScreen => {
    this.setState({ currentScreen });
  };

  render() {
    const { links, currentScreen } = this.state;

    return (
      <header className="Header-container">
        <div className="Header-logo">Muhammad Asif</div>
        <ul className="Header-container-ul">
          {links.map((item, index) => (
            <li key={index} className={currentScreen === item.title ? 'Header-li-active' : '' } onClick={() => this.screenNameHandlder(item.title)}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Header;
