"use client";

import Tarefa from "@/types/types";
import styles from "./card.module.css";
import { useState } from "react";

type Props = {
    tarefa: Tarefa;
    alternarConcluida: (id: number) => void;
}

const Card = ({ tarefa, alternarConcluida }: Props) => {

    const { id, descricao, concluida } = tarefa;     

    return (
        <div  key={id} className={styles.card}>
            <p className={concluida ? styles.concluida : styles.descricao}>
                {descricao}
            </p>
            <button className={styles.botaoAlternar} onClick={() => alternarConcluida(id)}>
                {concluida ? "Ainda preciso fazer..." : "Já fiz!"}
            </button>
            <button className={styles.botaoExcluir}>Excluir</button>
        </div>
    )

}

export default Card;