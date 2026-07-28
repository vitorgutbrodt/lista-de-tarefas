import Card from "../card";
import Tarefa from "@/types/types";
import styles from "./grid.module.css";

type Props = {
    tarefas: Tarefa[];
    alternarConcluida: (id: number) => void;
    excluirTarefa: (id: number) => void;
}

const Grid = ({tarefas, alternarConcluida, excluirTarefa}: Props) => {
    return (
        <section className={styles.grid}>
            {tarefas.map((tarefa) => (
                <Card key={tarefa.id} tarefa={tarefa} alternarConcluida={alternarConcluida} excluirTarefa={excluirTarefa} />
            ))}
        </section>

    )
}

export default Grid;