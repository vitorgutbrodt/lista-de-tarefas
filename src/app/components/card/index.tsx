"use client";

import Tarefa from "@/types/types";
import styles from "./card.module.css";

type Props = {
    tarefa: Tarefa;
    alternarConcluida: (id: number) => void;
    excluirTarefa: (id: number) => void;
}

const Card = ({ tarefa, alternarConcluida, excluirTarefa }: Props) => {

    const { id, descricao, concluida } = tarefa;    
      
    return (
        <div  key={id} className={styles.card}>
            <p className={concluida ? styles.concluida : styles.descricao}>
                {descricao}
            </p>
            <button className={styles.botaoAlternar} onClick={() => alternarConcluida(id)}>
                {concluida ? "Ainda preciso fazer..." : "Já fiz!"}
            </button>
            <button className={styles.botaoExcluir} onClick={() => excluirTarefa(id)}>
                Excluir
            </button>
        </div>
    )

}

export default Card;