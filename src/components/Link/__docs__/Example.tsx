import React from "react";
import Link from "../Link";
import { LinkProps } from "../Link.d";

const Example = ({ to, text, target = "_self" }: LinkProps) => {
  return <Link to={to} text={text} target={target} />;
};

export default Example;
