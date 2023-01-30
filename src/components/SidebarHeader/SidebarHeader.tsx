import React from "react";
import { useAppDispatch } from "../../hooks";
import { closeAll } from "../../store/sidebar/sidebar.slice";
import { FaPlus } from "react-icons/fa";

import "./sidebarHeader.scss";

interface Props {
  title: string;
}

const SidebarHeader: React.FC<Props> = ({ title }) => {
  const dispatch = useAppDispatch();

  const onClose = () => dispatch(closeAll());

  return (
    <div className="sidebar-header">
      <h3 className="sidebar-header__title title-tertiary">{title}</h3>
      <button
        className="sidebar-header__close-button"
        onClick={() => onClose()}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default SidebarHeader;
