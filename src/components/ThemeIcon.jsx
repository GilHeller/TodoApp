import React from "react";
import { ReactComponent as MoonIcon } from "../images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../images/icon-sun.svg";

const ThemeIcon = (props) => {
  return (
    <>
      {props.theme === "dark" ? (
        <SunIcon {...props} />
      ) : (
        <MoonIcon {...props} />
      )}
    </>
  );
};

export default ThemeIcon;
