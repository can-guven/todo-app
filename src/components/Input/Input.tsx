import { FC, forwardRef } from "react";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      label,
      type = "text",
      placeholder,
      value,
      onChange,
      disabled,
      error,
      ...rest
    } = props;

    return (
      <div className="input-container">
        {label && <label>{label}</label>}
        <input
          className={`input ${error ? "error" : ""} ${
            disabled ? "disabled" : ""
          } `}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          // eslint-disable-next-line jsx-a11y/aria-role
          role="input"
          {...rest}
        />
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
);

export default Input;
