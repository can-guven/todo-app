import { FC, forwardRef } from "react";
import "./Select.scss";
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  required?: boolean;
  value?: string;
}

const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      className = "",
      disabled,
      label,
      name,
      error,
      onChange,
      options = [],
      placeholder,
      required,
      value,
      children,
    } = props;
    return (
      <div className={className}>
        {label && <label htmlFor={name}>{label}</label>}
        <select
          className={`select ${error ? "error" : ""}`}
          disabled={disabled}
          id={name}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          required={required}
          value={value}
          data-testid={name}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <div>{error}</div>}
      </div>
    );
  }
);

export default Select;
