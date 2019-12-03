import React from "react";

export default function({ children, onClick }) {
  return (
    <div onClick={onClick} className="xp-dropdown-link">
      {children}
    </div>
  );
}
