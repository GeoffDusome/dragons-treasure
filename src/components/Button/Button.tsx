import clsx from "clsx";
import { ButtonProps, ButtonIconProps } from "./Button.d";
import styles from "./Button.module.css";

const ButtonIcon = ({ icon, iconDimensions }: ButtonIconProps) => {
  return (
    <span
      style={{ width: iconDimensions.width, height: iconDimensions.height }}
      aria-hidden="true"
      role="presentation"
    >
      {typeof icon === "string" ? (
        <img
          src={icon}
          width={iconDimensions.width}
          height={iconDimensions.height}
        />
      ) : (
        icon
      )}
    </span>
  );
};

const Button = ({
  icon = "",
  iconDimensions = { width: 24, height: 24 },
  iconPosition = "left",
  text,
  style = "filled",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={clsx(styles.button, {
          [styles.outlined]: style === "outlined",
          [styles.ghost]: style === "ghost",
        })}
        onClick={onClick}
        {...props}
      >
        {icon !== "" && iconPosition === "left" && (
          <ButtonIcon icon={icon} iconDimensions={iconDimensions} />
        )}
        {text}
        {icon !== "" && iconPosition === "right" && (
          <ButtonIcon icon={icon} iconDimensions={iconDimensions} />
        )}
      </button>
    </>
  );
};

export default Button;
