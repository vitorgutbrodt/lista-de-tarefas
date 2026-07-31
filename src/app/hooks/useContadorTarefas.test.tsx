import useContadorTarefas from "./useContadorTarefas";
import Tarefa from "@/types/types";

describe("useContadorTarefas", () => {
  it("deve retornar 0 quando não houver tarefas", () => {
    const tarefas: Tarefa[] = [];

    expect(useContadorTarefas(tarefas)).toBe(0);
  });

  it("deve retornar 1 quando houver uma tarefa", () => {
    const tarefas: Tarefa[] = [
      { id: 1, descricao: "Estudar", concluida: false },
    ];

    expect(useContadorTarefas(tarefas)).toBe(1);
  });

  it("deve retornar 3 quando houver três tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, descricao: "Tarefa 1", concluida: false },
      { id: 2, descricao: "Tarefa 2", concluida: false },
      { id: 3, descricao: "Tarefa 3", concluida: false },
    ];

    expect(useContadorTarefas(tarefas)).toBe(3);
  });
});