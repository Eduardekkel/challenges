import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input placeholder="Dodelido" name="John Doe" />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveAttribute("placeholder", "Dodelido");
  expect(input).toHaveAttribute("name", "John Doe");
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  render(<Input onChange={handleChange} />);
  const user = userEvent.setup();
  const input = screen.getByRole("textbox");
  await user.type(input, "Uno");
  expect(handleChange).toHaveBeenCalled(3);
});
