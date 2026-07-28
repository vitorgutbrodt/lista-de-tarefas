import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "./index";

const user = userEvent.setup(); // Cria uma instância do userEvent para simular interações do usuário

describe("NovaTarefa", () => {
    it("deve chamar a função handleAddTarefa quando o botão for clicado", async () => {
        const handleAddTarefaMock = jest.fn();
        const setDescricaoMock = jest.fn();
        const descricao = "Nova tarefa";

        render(
            <NovaTarefa 
                descricao={descricao}
                setDescricao={setDescricaoMock}
                handleAddTarefa={handleAddTarefaMock}
            />
        );
        const botao = screen.getByRole("button", {
        name: /adicionar tarefa/i        

        });
        await user.click(botao);
        

        expect(handleAddTarefaMock).toHaveBeenCalledTimes(1);
    });

    it("deve chamar a função handleAddTarefa quando a tecla Enter for pressionada", async () => {
        const handleAddTarefaMock = jest.fn();
        const setDescricaoMock = jest.fn();
        const descricao = "Nova tarefa";

        render(
            <NovaTarefa 
                descricao={descricao}
                setDescricao={setDescricaoMock}
                handleAddTarefa={handleAddTarefaMock}
            />
        );
        await user.type(screen.getByPlaceholderText(/Digite tarefa/i), "{Enter}");
        expect(handleAddTarefaMock).toHaveBeenCalledTimes(1);
    });

    it("deve chamar a função setDescricao quando o valor do input mudar", async () => {
        const handleAddTarefaMock = jest.fn();
        const setDescricaoMock = jest.fn();
        const descricao = "";

        render(
            <NovaTarefa 
                descricao={descricao}
                setDescricao={setDescricaoMock}
                handleAddTarefa={handleAddTarefaMock}
            />
        );
        await user.type(screen.getByPlaceholderText(/Digite tarefa/i), "Nova tarefa");
        expect(setDescricaoMock).toHaveBeenCalledTimes(1);
    });
});
