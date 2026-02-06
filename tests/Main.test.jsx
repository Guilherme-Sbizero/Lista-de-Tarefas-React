import { render, screen } from "@testing-library/react";
import Main from "../src/components/Main";

describe("Main", () => {
  test("renderiza o container principal", () => {
    render(
      <Main>
        <p>Conteúdo</p>
      </Main>
    );

    expect(
      screen.getByText("Conteúdo")
    ).toBeInTheDocument();
  });
});
