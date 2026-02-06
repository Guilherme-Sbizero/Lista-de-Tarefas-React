import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../src/components/Form";

describe("Form", () => {
  test("renderiza input e botão", () => {
    render(<Form />);

    expect(
      screen.getByPlaceholderText(/digite sua tarefa/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  });

  test("permite digitar uma tarefa", () => {
    render(<Form />);

    const input = screen.getByPlaceholderText(/digite sua tarefa/i);

    fireEvent.change(input, {
      target: { value: "Estudar Jest" },
    });

    expect(input.value).toBe("Estudar Jest");
  });
});
