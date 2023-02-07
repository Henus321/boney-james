import React from "react";
import { FaTrash } from "react-icons/fa";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ITEM_ROUTE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ICartItem, IOrder } from "../../models";
import { deleteOrder } from "../../store/orders/orders.slice";
import { closeAll } from "../../store/sidebar/sidebar.slice";
import {
  beautifyCost,
  convertTimestampToString,
  getTitlePhoto,
  getTotal,
} from "../../utils";

import Button from "../Button/Button";
import ColorItem from "../ColorItem/ColorItem";

import "./profileOrderItem.scss";

interface Props {
  order: IOrder;
}

const ProfileOrderItem: React.FC<Props> = ({ order }) => {
  const { isLoading } = useAppSelector((state) => state.orders);

  const total = getTotal(order.items);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onPhotoClick = (item: ICartItem) => {
    dispatch(closeAll());

    const params = `?color=${item.color}`;
    navigate({
      pathname: `${ITEM_ROUTE}/${item.slug}`,
      search: `${createSearchParams(params)}`,
    });
  };

  const onDelete = (order: IOrder) => dispatch(deleteOrder(order));

  return (
    <div className="profile-order-item">
      <p>
        &#8470;{order.id?.slice(0, 6)} от{" "}
        {convertTimestampToString(order.timestamp)}
      </p>
      {order.items.map((item) => (
        <div
          className="profile-order-item__element"
          key={`${item.slug}${item.color}${order.id}`}
        >
          <img
            onClick={() => onPhotoClick(item)}
            src={getTitlePhoto(item.options, item.color)}
            alt="Coat"
          />
          <div className="profile-order-item__information">
            <span>{item.name}</span>
            <span>{beautifyCost(item.cost)}</span>
            <span className="profile-order-item__color-container">
              Цвет:
              <ColorItem
                className="profile-order-item__color"
                color={item.color}
              />
            </span>
          </div>
        </div>
      ))}
      <div className="profile-order-item__footer">
        <span>Сумма: {total}</span>
        <Button
          className="profile-order-item__button"
          disabled={isLoading}
          onClick={onDelete}
          value={order}
        >
          <FaTrash />
        </Button>
      </div>
    </div>
  );
};

export default ProfileOrderItem;
