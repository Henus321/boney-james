import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CITIES_OPTIONS, SHOPS_ROUTE, TYPE_OPTIONS } from "../../constants";

import "./shopsActions.scss";

interface Props {
  setSearch: (arg: string) => void;
}

const ShopsActions: React.FC<Props> = ({ setSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParams = searchParams.get("type");
  const type = typeParams ? typeParams : "";

  const { city } = useParams();
  const navigate = useNavigate();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearch(search);
  };

  const onCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    navigate(`${SHOPS_ROUTE}${city ? `/${city}` : ""}`);
  };

  const onTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;

    if (!type) {
      searchParams.delete("type");
      setSearchParams(searchParams);
      return;
    }

    setSearchParams({ type });
  };

  return (
    <div className="shops-actions">
      <div className="shops-actions__element">
        <label htmlFor="name-input">Название</label>
        <input
          onChange={(e) => onNameChange(e)}
          id="name-input"
          autoComplete="off"
          type="text"
        />
      </div>
      <div className="shops-actions__element">
        <label htmlFor="city-select">Город</label>
        <select
          defaultValue={city}
          onChange={(e) => onCityChange(e)}
          id="city-select"
        >
          {CITIES_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value} label={label} />
          ))}
        </select>
      </div>
      <div className="shops-actions__element">
        <label htmlFor="type-select">Тип</label>
        <select
          defaultValue={type}
          onChange={(e) => onTypeChange(e)}
          id="type-select"
        >
          {TYPE_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value} label={label} />
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShopsActions;
