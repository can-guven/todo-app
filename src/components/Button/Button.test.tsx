import Button from "./Button";

import { render, screen } from "@testing-library/react";

describe("Tet Button Component", () => {
  it("render correctly", () => {
    render(<Button>Test</Button>);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should render color correctly", () => {
    render(<Button color="secondary">Test</Button>);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toHaveClass("btn-secondary");
  });

  it("should render type correctly", () => {
    render(<Button type="submit">Test</Button>);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toHaveAttribute("type", "submit");
  });

  it("should render icon correctly", () => {
    render(<Button icon={<div>Icon</div>}>Test</Button>);
    const linkElement = screen.getByRole("icon-button");
    expect(linkElement).toHaveClass("btn-icon");
  });

  it("should render icon only correctly", () => {
    render(<Button icon={<div>Icon</div>} />);
    const linkElement = screen.getByRole("icon-button");
    expect(linkElement).toHaveClass("btn-icon");
  });

  it("should render disabled correctly", () => {
    render(<Button disabled>Test</Button>);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toHaveClass("btn-disabled");
  });

  it("button click should work", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>Test</Button>);
    const linkElement = screen.getByText(/Test/i);
    linkElement.click();
    expect(mockFn).toHaveBeenCalled();
  });
});
