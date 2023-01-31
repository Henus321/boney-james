import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  fetchItem,
  setColor,
  setSize,
  reset,
} from "../../store/item/item.slice";
import { useParams, useSearchParams } from "react-router-dom";
import { beautifyCost, getColor } from "../../utils";
import { IItem } from "../../models";
import { addOrIncreaseItem } from "../../store/cart/cart.slice";
import { toast } from "react-toastify";
import { ITEM_SUCCESS_MESSAGE } from "../../constants";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Slider from "../../components/Slider/Slider";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import SizePicker from "../../components/SizePicker/SizePicker";
import BookmarkButton from "../../components/BookmarkButton/BookmarkButton";
import Button from "../../components/Button/Button";

import "./item.scss";

const Item = () => {
  const { item, color, size, isSuccess } = useAppSelector(
    (state) => state.item
  );
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
    dispatch(setColor(color));
    setSearchParams({ color });
  };

  const setActiveSize = (size: string) => dispatch(setSize(size));

  const onFinish = (item: IItem, color: string, size: string) => {
    dispatch(addOrIncreaseItem({ ...item, color, size, quantity: 1 }));
    toast.success(ITEM_SUCCESS_MESSAGE);
  };

  return (
    <>
      {item && (
        <div className="item">
          <Slider item={item} />
          <div className="item__information">
            <Breadcrumb payload={item.name} />
            <h4 className="item__element title-tertiary">{item.name}</h4>
            <span className="item__element">{beautifyCost(item.cost)}</span>
            <p className="item__element">{item.description}</p>
            <ColorPicker
              className="item__element"
              options={item.options}
              activeColor={getColor(colorParams, item)}
              setActiveColor={setActiveColor}
            />
            <SizePicker
              className="item__element"
              sizes={item.sizes}
              activeSize={size}
              setActiveSize={setActiveSize}
            />
            <div className="item__actions-container">
              <Button onClick={() => onFinish(item, color, size)}>
                В корзину
              </Button>
              <BookmarkButton className="item__bookmark-button" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
