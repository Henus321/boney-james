import React from "react";
import { FaGhost } from "react-icons/fa";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import "./pageNotFound.scss";

const PageNotFound = ({
  options,
}: {
  options: {
    title: string;
    text: string;
    image?: string;
  };
}) => {
  return (
    <>
      <Breadcrumb />
      <div className="page-not-found">
        <FaGhost />
        <h2 className="title-secondary">{options.title}</h2>
        <span>{options.text}</span>
      </div>
    </>
  );
};

export default PageNotFound;
