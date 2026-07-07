import Card from "../card";
import Tarefa from "@/types/types";
import styles from "./grid.module.css";

type Props = {
    tarefas: Tarefa[];
}

const Grid = ({tarefas}: Props) => {
    return (
        <section className={styles.grid}>
            {tarefas.map((tarefa) => (
                <Card key={tarefa.id} tarefa={tarefa}/>
            ))}
        </section>

    )
}

export default Grid;