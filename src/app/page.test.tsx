import { render, screen, waitFor } from "@testing-library/react";
import Home from "./page";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

beforeEach(() => {
  localStorage.clear();
  jest.restoreAllMocks();
});

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

  it("deve adicionar uma nova tarefa", async () => {
  render(<Home />);

  const input = screen.getByPlaceholderText(/digite tarefa/i);
  const botao = screen.getByRole("button", {
    name: /adicionar tarefa/i,
  });

  await userEvent.type(input, "Comprar pão");
  await userEvent.click(botao);

  expect(screen.getByText("Comprar pão")).toBeInTheDocument();
  });

  it("deve concluir uma tarefa", async () => {
  render(<Home />);

  const input = screen.getByPlaceholderText(/digite tarefa/i);

  await userEvent.type(input, "Estudar Jest");

  await userEvent.click(
    screen.getByRole("button", {
      name: /adicionar tarefa/i,
    })
  );

  const botoes = screen.getAllByRole("button", {
  name: /já fiz/i,
  });

  await userEvent.click(botoes[0]);

  expect(
    screen.getByRole("button", {
      name: /ainda preciso fazer/i,
    })
  ).toBeInTheDocument();
  });

  it("deve excluir uma tarefa", async () => {
  render(<Home />);

  await userEvent.type(
    screen.getByPlaceholderText(/digite tarefa/i),
    "Corrigir aplicação"
  );

  await userEvent.click(
    screen.getByRole("button", {
      name: /adicionar tarefa/i,
    })
  );

  const botoesExcluir = screen.getAllByRole("button", {
    name: /excluir/i,
  });

  await userEvent.click(botoesExcluir[0]);

  await waitFor(() => {
  expect(
    screen.queryByText("Corrigir aplicação")
  ).not.toBeInTheDocument();
  });
  });

  it("deve carregar tarefas salvas no localStorage", () => {
  jest.spyOn(Storage.prototype, "getItem").mockReturnValue(
    JSON.stringify([
      {
        id: 1,
        descricao: "Comprar pão",
        concluida: false,
      },
    ])
  );

  render(<Home />);

  expect(screen.getByText("Comprar pão")).toBeInTheDocument();
  });

  it("deve salvar as tarefas no localStorage", async () => {
  const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

  render(<Home />);

  await userEvent.type(
    screen.getByPlaceholderText(/digite tarefa/i),
    "Comprar pão"
  );

  await userEvent.click(
    screen.getByRole("button", {
      name: /adicionar tarefa/i,
    })
  );

  expect(setItemSpy).toHaveBeenCalledWith(
    "tarefas",
    expect.stringContaining("Comprar pão")
  );
  });

});