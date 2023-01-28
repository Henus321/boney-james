import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchItem, setColor, reset } from "../../store/item/item.slice";
import { useParams, useSearchParams } from "react-router-dom";
import { getColor } from "../../utils";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Slider from "../../components/Slider/Slider";
import ColorPicker from "../../components/ColorPicker/ColorPicker";

import "./item.scss";

const Item = () => {
  const { item, color, isSuccess } = useAppSelector((state) => state.item);
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const colorParams = searchParams.get("color");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slug) {
      dispatch(fetchItem(slug));
    }
  }, [dispatch, slug]);

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  const setActiveColor = (color: string) => {
    setColor(color);
    setSearchParams({ color });
  };

  return (
    <>
      {item && (
        <div className="item">
          <Slider item={item} />
          <div className="item__information">
            <Breadcrumb payload={item.name} />
            <h4 className="title-tertiary">{item.name}</h4>
            <span>{item.cost}</span>
            <p>{item.description}</p>
            <div className="item__sizes-container">
              {item.sizes.map((size) => (
                <span key={size}>{size}</span>
              ))}
            </div>
            <ColorPicker
              options={item.options}
              activeColor={getColor(color, colorParams, item)}
              setActiveColor={setActiveColor}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
