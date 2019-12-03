import React from "react";

export default function({ children, onClick, extraClass = "" }) {
  return (
    <div onClick={onClick} className={`xp-dropdown-link ${extraClass}`}>
      {children}
    </div>
  );
}
