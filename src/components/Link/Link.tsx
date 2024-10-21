import { LinkProps } from "./Link.d";
import styles from "./Link.module.css";

const Link = ({ to, target = "_self", text, ...props }: LinkProps) => {
  return (
    <a href={to} target={target} className={styles.link} {...props}>
      {text}
    </a>
  );
};

export default Link;
