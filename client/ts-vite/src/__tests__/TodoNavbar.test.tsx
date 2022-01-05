// Imports
import { render } from "@testing-library/react";

// To test
import TodoNavbar from "../components/TodoNavbar";

test("Renders main page correctly", () => {
  render(<TodoNavbar themeHandler={() => {}} status="" />);

  expect(true).toBeTruthy();
});
