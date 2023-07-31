import React, { useState } from "react";
import "../styles/switch.css";

export default function Switch() {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    let theme = isToggled ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}