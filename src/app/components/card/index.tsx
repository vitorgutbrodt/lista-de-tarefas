import Tarefa from "@/types/types";
import styles from "./card.module.css";

type Props = {
    tarefa: Tarefa;
}

const Card = ({ tarefa }: Props) => {

    const { id, descricao, concluida } = tarefa;

    return (
        <div  key={id} className={styles.card}>
            <p className={concluida ? styles.concluida : styles.descricao}>
                {descricao}
            </p>
            <button className={styles.botaoAlternar}>
                {concluida ? "Marcar como não concluída" : "Marcar como concluída"}
            </button>
            <button className={styles.botaoExcluir}>Excluir</button>
        </div>
    )

}

export default Card;