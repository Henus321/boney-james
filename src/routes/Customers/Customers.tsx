import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Accordion from "../../components/Accordion/Accordion";

import "./customers.scss";

const Customers = () => {
  return (
    <>
      <Breadcrumb />
      <div className="customers">
        <h2 className="customers__title title-secondary">Покупателям</h2>
        <Accordion />
      </div>
    </>
  );
};

export default Customers;
