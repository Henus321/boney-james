import React from "react";

import FooterInformation from "../FooterInformation/FooterInformation";
import FooterSocialNetwork from "../FooterSocialNetwork/FooterSocialNetwork";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterInformation />
      <FooterSocialNetwork />
    </footer>
  );
};

export default Footer;
