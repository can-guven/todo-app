import { fireEvent, render, screen } from "@testing-library/react";
import JobCreateForm from "./JobCreateForm";

describe("JobCreateForm", () => {
  it("should render", () => {
    render(<JobCreateForm onSubmit={jest.fn()} />);
  });

  it("should render a form with a job title input and a priority input", () => {
    render(<JobCreateForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText("Job Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Priority")).toBeInTheDocument();
  });

  it("should render a submit button", () => {
    render(<JobCreateForm onSubmit={jest.fn()} />);
    expect(screen.getByRole("icon-button")).toBeInTheDocument();
  });

  it("should call the onSubmit function when the form is submitted", () => {
    const onSubmit = jest.fn();
    render(<JobCreateForm onSubmit={onSubmit} />);
    const jobTitle = "Test Job";
    const priority = "1";
    const jobTitleInput = screen.getByTestId("jobTitle") as HTMLInputElement;
    const priorityInput = screen.getByTestId("priority") as HTMLSelectElement;
    const submitButton = screen.getByRole("icon-button");
    fireEvent.change(jobTitleInput, { target: { value: jobTitle } });
    fireEvent.change(priorityInput, { target: { value: priority } });
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledWith({ jobTitle, priority });
  });
});
