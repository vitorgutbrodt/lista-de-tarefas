import Card from "../card";
import Tarefa from "@/types/types";
import styles from "./grid.module.css";

type Props = {
    tarefas: Tarefa[];
    alternarConcluida: (id: number) => void;
}

const Grid = ({tarefas, alternarConcluida}: Props) => {
    return (
        <section className={styles.grid}>
            {tarefas.map((tarefa) => (
                <Card key={tarefa.id} tarefa={tarefa} alternarConcluida={alternarConcluida} />
            ))}
        </section>

    )
}

export default Grid;