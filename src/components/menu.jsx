import React from "react";
import "./menu.scss";

import { BiMenu, BiArrowBack } from "react-icons/bi";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import contact from "../config/contact.json";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });

    console.log(this.state.isOpen);
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <div className={`menu-wrapper ${isOpen ? "hide-left" : "none"}`}>
          <div className="menu-switch" onClick={this.toggleMenu}>
            <BiMenu />
          </div>
          <img
            src="/img/logo.svg"
            alt="logo"
            height={`70px`}
            className="logo-smartphone"
          />
          <div className="menu-social-warp">
            <div className="menu-social">
              <a href={contact.facebook}>
                <FaFacebookF />
              </a>
              <a href={contact.linkedin}>
                <FaLinkedinIn />
              </a>
              <a href={contact.instagram}>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className={`side-menu-wrapper ${isOpen ? "active" : "none"}`}>
          <div className="sm-header">
            <div className="menu-close" onClick={this.toggleMenu}>
              <BiArrowBack />
            </div>
            <a
              href="/"
              className="site-logo"
              style={{
                height: `90px`,
              }}
            >
              <img src="/img/logo.svg" alt="logo" height={`70px`} />
            </a>
          </div>
          <nav className="main-menu">
            <ul>
              <li>
                <a
                  href="/"
                  className={window.location.pathname == "/" ? "active" : ""}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/portfolio"
                  className={
                    window.location.pathname == "/portfolio" ? "active" : ""
                  }
                >
                  Trabalhos
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={
                    window.location.pathname == "/contact" ? "active" : ""
                  }
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={
                    window.location.pathname == "/about" ? "active" : ""
                  }
                >
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
          <div className="sm-footer">
            <div className="sm-socail">
              <a href={contact.facebook}>
                <FaFacebookF />
              </a>
              <a href={contact.linkedin}>
                <FaLinkedinIn />
              </a>
              <a href={contact.instagram}>
                <FaInstagram />
              </a>
            </div>
            <div className="copyright-text">
              <p>
                Copyright &copy; {new Date().getFullYear().toString()} Tairine
                Fernanda{" "}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
