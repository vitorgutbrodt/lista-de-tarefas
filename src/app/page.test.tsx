import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  it("deve renderizar os componentes da página", () => {
    render(<Home />);

    expect(screen.getByPlaceholderText(/digite tarefa/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /adicionar tarefa/i,
      })
    ).toBeInTheDocument();
  });
});