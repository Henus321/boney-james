import React from "react";
import { SOCIAL_NETWORKS } from "../../constants";
import { v4 as uuidv4 } from "uuid";

import "./footerSocialNetwork.scss";

const FooterSocialNetwork = () => {
  return (
    <div className="footer-social-network">
      <h2 className="title-secondary">Следите за нами</h2>
      <ul>
        {SOCIAL_NETWORKS.map((item) => (
          <li key={uuidv4()}>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
      <span>2023 &#169; Все права защищены</span>
    </div>
  );
};

export default FooterSocialNetwork;
