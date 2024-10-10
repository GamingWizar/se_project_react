import React from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch(props) {
  const currentTemperatureUnit = React.useContext(
    CurrentTemperatureUnitContext
  );
  const [checked, setChecked] = React.useState(false);

  const handleCheckChange = () => {
    setChecked(!checked);
    currentTemperatureUnit.handleToggleSwitchChange();
  };

  return (
    <label className="temp-toggle">
      <input
        className="temp-toggle__checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleCheckChange}
      />
      <span className="temp-toggle__switch">
        <span
          className={`temp-toggle__switch-pos ${
            checked && "temp-toggle__switch-pos_checked"
          }`}
        ></span>
        <span
          className={`temp-toggle__degree ${
            !checked && "temp-toggle__degree_selected"
          }`}
        >
          F
        </span>
        <span
          className={`temp-toggle__degree ${
            checked && "temp-toggle__degree_selected"
          }`}
        >
          C
        </span>
      </span>
    </label>
  );
}
