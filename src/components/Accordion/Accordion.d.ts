type AccordionProps = {
  items: {
    title: string;
    content: React.ReactNode;
    open?: boolean;
  }[];
  defaultOpen?: boolean;
};

export { AccordionProps };
