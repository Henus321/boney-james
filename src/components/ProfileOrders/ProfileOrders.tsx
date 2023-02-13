import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ORDER_DELETE_MESSAGE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { sortOrders } from "../../utils";
import {
  fetchOrders,
  reset as resetOrders,
} from "../../store/orders/orders.slice";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import ProfileOrderItem from "../ProfileOrderItem/ProfileOrderItem";

import "./profileOrders.scss";

const ProfileOrders = () => {
  const { orders, isLoading, isSuccess, isError, message } = useAppSelector(
    (state) => state.orders
  );
  const [isDescending, setIsDescending] = useState(false);

  const sortedOrders = sortOrders(orders, isDescending);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isSuccess) dispatch(fetchOrders());

    if (isSuccess) {
      dispatch(resetOrders());
      toast.success(ORDER_DELETE_MESSAGE);
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (isError) {
      dispatch(resetOrders());
      toast.error(message);
    }
  }, [dispatch, isError, message]);

  const onToggleSortMode = () => setIsDescending((prevState) => !prevState);

  return (
    <div className="profile-orders">
      <div className="profile-orders__header">
        <h3 className="title-quaternary">Ваши заказы:</h3>
        {sortedOrders.length > 1 && (
          <button onClick={() => onToggleSortMode()}>
            {isDescending ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        )}
      </div>
      {sortedOrders.length > 0 &&
        sortedOrders.map((order) => (
          <ProfileOrderItem key={order.id} order={order} />
        ))}
      {!isLoading && orders.length === 0 && (
        <span className="profile-orders__empty">У вас пока нет заказов</span>
      )}
    </div>
  );
};

export default ProfileOrders;
