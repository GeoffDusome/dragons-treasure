import React from "react";
import Accordion from "../Accordion";
import { AccordionProps } from "../Accordion.d";

const Example = ({ items, defaultOpen = false }: AccordionProps) => {
  return <Accordion items={items} defaultOpen={defaultOpen} />;
};

export default Example;
