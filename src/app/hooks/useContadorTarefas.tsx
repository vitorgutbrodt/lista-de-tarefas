import Tarefa from "@/types/types";


const useContadorTarefas = (tarefas: Tarefa[]) => {
    return tarefas.length;
}

export default useContadorTarefas;