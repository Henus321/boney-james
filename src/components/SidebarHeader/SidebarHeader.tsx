import React from "react";
import { useAppDispatch } from "../../hooks";
import { closeAll } from "../../store/sidebar/sidebar.slice";
import { FaPlus } from "react-icons/fa";

import "./sidebarHeader.scss";

interface Props {
  children: React.ReactNode;
}

const SidebarHeader: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  const onClose = () => dispatch(closeAll());

  return (
    <div className="sidebar-header">
      {children}
      <button
        data-testid="sidebar-close-btn"
        className="sidebar-header__close-button"
        onClick={() => onClose()}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default SidebarHeader;
