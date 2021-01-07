import React from "react";
import "./styles.css";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as GithubIcon } from "./github.svg";

const Footer = () => {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior By Thiago
      Miziara
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/thiago-nunes-miziara-92a85b6a/"
          target="_new"
        >
          <LinkedinIcon />
        </a>
        <a href="https://github.com/thiagonmiziara" target="_new">
          <GithubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
