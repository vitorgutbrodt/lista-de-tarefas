"use client";

import Tarefa from "@/types/types";
import styles from "./card.module.css";
import { useState } from "react";

type Props = {
    tarefa: Tarefa;
}

const Card = ({ tarefa }: Props) => {

    const { id, descricao } = tarefa;

    const [concluida, setConcluida] = useState(tarefa.concluida);

    const alternarConcluida = () => {
        setConcluida(!concluida);
    };

    return (
        <div  key={id} className={styles.card}>
            <p className={concluida ? styles.concluida : styles.descricao}>
                {descricao}
            </p>
            <button className={styles.botaoAlternar} onClick={alternarConcluida}>
                {concluida ? "Ainda preciso fazer..." : "Já fiz!"}
            </button>
            <button className={styles.botaoExcluir}>Excluir</button>
        </div>
    )

}

export default Card;