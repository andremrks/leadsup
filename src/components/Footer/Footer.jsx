import React from "react";
import "./footer.css";

import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

import logo from "../../assets/images/Logo LeadsUp FINAL ICON-WHITE.png";

const Footer = () => {
  return (
    <section className="leadsup__footer">
      <div className="leadsup__footer-container">
        <div className="leadsup__footer-content">
          <div className="leadsup__footer-logo">
            <img src={logo} alt="LeadsUp Logo" />
          </div>
          <div className="leadsup__footer-links">
            <a
              href="https://wa.me/+5513988266392"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/company/leads-up/about/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>
        <div className="leadsup__footer-copy">
          <p>©2023 by LeadsUp</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
