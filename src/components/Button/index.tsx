import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const { label, color, type, ...rest } = props;
  return (
    <button type={type} className={`btn btn-${color}`} {...rest}>
      {label}
    </button>
  );
};

export default Button;
