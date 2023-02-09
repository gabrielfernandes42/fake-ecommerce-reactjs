import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be in touch with us!</span>
        <div className="mail">
          <input type="text" placeholder="Enter your best email" />
          <button>Join Us! </button>
        </div>
        <div className="icons">
          <Link
            className="links-icons"
            target="_blank"
            to="https://www.facebook.com/"
          >
            <FacebookIcon />
          </Link>
          <Link
            className="links-icons"
            target="_blank"
            to="https://www.facebook.com/"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
