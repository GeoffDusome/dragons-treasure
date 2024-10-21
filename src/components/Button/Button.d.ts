import React, { MouseEventHandler } from "react";

type ButtonProps = {
  icon?: React.ReactNode;
  iconDimensions?: { width: number; height: number };
  iconPosition?: "left" | "right";
  text: string;
  style: "filled" | "outlined" | "ghost";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type ButtonIconProps = {
  icon: React.ReactNode;
  iconDimensions: { width: number; height: number };
};

export { ButtonProps, ButtonIconProps };
