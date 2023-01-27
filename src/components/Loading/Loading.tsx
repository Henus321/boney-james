import React from "react";

import Spinner from "../../assets/spinner.png";

import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <img src={Spinner} />
    </div>
  );
};

export default Loading;
