import React from "react";
import { useAppDispatch } from "../../hooks";
import { IOrder } from "../../models";
import { deleteOrder } from "../../store/orders/orders.slice";
import { getTotal } from "../../utils";

import "./profileOrderItem.scss";

interface Props {
  order: IOrder;
}

const ProfileOrderItem: React.FC<Props> = ({ order }) => {
  const total = getTotal(order.items);

  const dispatch = useAppDispatch();

  const onDelete = (order: IOrder) => {
    dispatch(deleteOrder(order));
  };

  return (
    <div className="profile-order-item">
      <span>{order.id}</span>
      <span>{total}</span>
      <button onClick={() => onDelete(order)}>Отменить заказ</button>
    </div>
  );
};

export default ProfileOrderItem;
