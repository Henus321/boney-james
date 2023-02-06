import React from "react";

import ProfileOrderItem from "../ProfileOrderItem/ProfileOrderItem";

import "./profileOrders.scss";

const ProfileOrders = () => {
  const orders = null;

  return (
    <div className="profile-orders">
      <h3 className="title-quaternary">Ваши заказы:</h3>
      {orders && <ProfileOrderItem />}
      {!orders && (
        <span className="profile-orders__empty">У вас пока нет заказов</span>
      )}
    </div>
  );
};

export default ProfileOrders;
