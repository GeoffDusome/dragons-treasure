import React from "react";
import Button from "../Button";
import { ButtonProps } from "../Button.d";

const Example = ({
  icon = "",
  iconDimensions = { width: 24, height: 24 },
  iconPosition = "left",
  text = "Button Text",
  style = "filled",
  onClick = () => {},
  ...props
}: ButtonProps) => {
  return (
    <Button
      icon={icon}
      iconDimensions={iconDimensions}
      iconPosition={iconPosition}
      text={text}
      style={style}
      onClick={onClick}
      {...props}
    />
  );
};

export default Example;
