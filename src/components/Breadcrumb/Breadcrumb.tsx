import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getLocaleName } from "../../utils";

import "./breadcrumb.scss";

interface Props {
  payload?: string;
}

const Breadcrumb: React.FC<Props> = ({ payload = undefined }) => {
  const { pathname } = useLocation();

  const localeName = getLocaleName(pathname, payload);

  return (
    <div className="breadcrumb">
      <Link to="/">На главную</Link>
      <span> - </span>
      <span>{localeName}</span>
    </div>
  );
};

export default Breadcrumb;
