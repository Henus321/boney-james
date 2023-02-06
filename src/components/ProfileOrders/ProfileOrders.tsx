import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { ORDER_DELETE_MESSAGE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  fetchOrders,
  reset as resetOrders,
} from "../../store/orders/orders.slice";

import ProfileOrderItem from "../ProfileOrderItem/ProfileOrderItem";

import "./profileOrders.scss";

const ProfileOrders = () => {
  const { orders, isSuccess } = useAppSelector((state) => state.orders);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isSuccess) dispatch(fetchOrders());

    if (isSuccess) {
      dispatch(resetOrders());
      toast.success(ORDER_DELETE_MESSAGE);
    }
  }, [dispatch, isSuccess]);

  return (
    <div className="profile-orders">
      <h3 className="title-quaternary">Ваши заказы:</h3>
      {orders.length > 0 &&
        orders.map((order) => (
          <ProfileOrderItem key={order.id} order={order} />
        ))}
      {orders.length === 0 && (
        <span className="profile-orders__empty">У вас пока нет заказов</span>
      )}
    </div>
  );
};

export default ProfileOrders;
