import { FC } from "react";
import "./Header.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <h3>Todo App</h3>
    </header>
  );
};

export default Header;
