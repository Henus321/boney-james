import React from "react";

import "./shopsActions.scss";

const ShopsActions = () => {
  return (
    <div className="shops-actions">
      <div className="shops-actions__element">
        <label htmlFor="name-input">Название</label>
        <input id="name-input" type="text" />
      </div>
      <div className="shops-actions__element">
        <label htmlFor="city-select">Город</label>
        <select id="city-select">
          <option></option>
          <option>Москва</option>
          <option>Санкт-Петербург</option>
          <option>Владивосток</option>
          <option>Мытищи</option>
        </select>
      </div>
      <div className="shops-actions__element">
        <label htmlFor="type-select">Тип</label>
        <select id="type-select">
          <option></option>
          <option>Одежда для женщин</option>
          <option>Одежда для мужчин</option>
          <option>Одежда для детей</option>
        </select>
      </div>
    </div>
  );
};

export default ShopsActions;
