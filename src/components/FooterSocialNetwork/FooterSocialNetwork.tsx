import React from "react";
import { SOCIAL_NETWORKS } from "../../constants";

import "./footerSocialNetwork.scss";

const FooterSocialNetwork = () => {
  return (
    <div className="footer-social-network">
      <h2 className="title-secondary">Следите за нами</h2>
      <ul>
        {SOCIAL_NETWORKS.map(({ link, icon }) => (
          <li key={link}>
            <a href={link} rel="noopener noreferrer" target="_blank">
              {icon}
            </a>
          </li>
        ))}
      </ul>
      <span>2023 &#169; Все права защищены</span>
    </div>
  );
};

export default FooterSocialNetwork;
