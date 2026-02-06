import { render, screen } from "@testing-library/react";
import Tarefas from "../src/components/Tarefas";

describe("Tarefas", () => {
  test("renderiza tarefas na tela", () => {
    const tarefas = ["Testar app", "Criar testes"];

    render(<Tarefas tarefas={tarefas} />);

    expect(screen.getByText("Testar app")).toBeInTheDocument();
    expect(screen.getByText("Criar testes")).toBeInTheDocument();
  });
});
