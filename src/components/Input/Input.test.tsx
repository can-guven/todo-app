import { fireEvent, render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Test Input Component", () => {
  it("render correctly", () => {
    render(<Input />);
    const linkElement = screen.getByRole("input");
    expect(linkElement).toBeInTheDocument();
  });

  it("should render placeholder correctly", () => {
    render(<Input placeholder="Placeholder" />);
    const linkElement = screen.getByRole("input");
    expect(linkElement).toHaveAttribute("placeholder", "Placeholder");
  });

  it("should render label correctly", () => {
    render(<Input label="Label" />);
    const linkElement = screen.getByText(/Label/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should render error correctly", () => {
    render(<Input error="Error" />);
    const linkElement = screen.getByText(/Error/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should render disabled correctly", () => {
    render(<Input disabled />);
    const linkElement = screen.getByRole("input");
    expect(linkElement).toHaveAttribute("disabled");
  });

  it("should render value correctly", () => {
    render(<Input defaultValue={"Value"} />);
    const linkElement = screen.getByRole("input");
    expect(linkElement).toHaveValue("Value");
  });

  it("should render onChange correctly", () => {
    const mockFn = jest.fn();
    render(<Input onChange={mockFn} />);
    const linkElement = screen.getByRole("input") as HTMLInputElement;
    fireEvent.change(linkElement, { target: { value: "test" } });
    expect(mockFn).toHaveBeenCalled();
  });

  it("should render type correctly", () => {
    render(<Input type="password" />);
    const linkElement = screen.getByRole("input");
    expect(linkElement).toHaveAttribute("type", "password");
  });

  it("should render className correctly", () => {
    render(<Input className="test-class" />);
    const linkElement = screen.getByRole("input");
    expect(linkElement).toHaveClass("test-class");
  });

  it("should render style correctly", () => {
    render(<Input style={{ color: "red" }} />);
    const linkElement = screen.getByRole("input");
    expect(linkElement).toHaveStyle("color: red");
  });
});
