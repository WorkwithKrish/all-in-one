import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app heading", () => {
  render(<App />);
  expect(screen.getByText(/Todo Items/i)).toBeInTheDocument();
});
