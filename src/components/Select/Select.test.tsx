import { render, screen } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  const options = [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
  ];

  it("should render", () => {
    const { container } = render(<Select name={""} options={options} />);
    expect(container).toBeInTheDocument();
  });

  it("should render options", () => {
    render(<Select name={""} options={options} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("should render error", () => {
    render(<Select name={""} options={options} error={"Error message"} />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("should render label", () => {
    render(<Select name={""} options={options} label={"Label"} />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
});
