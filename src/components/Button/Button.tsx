import { FC } from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { children, color = "primary", type = "button", icon, ...rest } = props;
  return (
    <button
      {...rest}
      role={icon ? "icon-button" : "button"}
      type={type}
      className={`btn btn-${color} ${icon ? "btn-icon" : ""} ${
        rest.disabled ? "btn-disabled" : ""
      } ${rest.className ? rest.className : ""}`}
    >
      {icon && icon}
      {children && icon && <span>{children}</span>}
      {children && !icon && children}
    </button>
  );
};

export default Button;
