import { AccordionProps } from "./Accordion.d";
import styles from "./Accordion.module.css";

const Accordion = ({ items, defaultOpen = false }: AccordionProps) => {
  return items.map((item, index) => (
    <details
      key={index}
      className={styles.details}
      open={defaultOpen || item?.open}
    >
      <summary className={styles.summary}>{item.title}</summary>
      <div className={styles.content}>{item.content}</div>
    </details>
  ));
};

export default Accordion;
