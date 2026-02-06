import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  test("renderiza o título principal", () => {
    render(<App />);

    expect(
      screen.getByText(/lista de tarefas/i)
    ).toBeInTheDocument();
  });
});
