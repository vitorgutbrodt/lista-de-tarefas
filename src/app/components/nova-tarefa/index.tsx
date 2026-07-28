"use client";

import styles from "./nova-tarefa.module.css";

type Props = {
  descricao: string;
  setDescricao: (descricao: string) => void;
  handleAddTarefa: () => void;
};

const NovaTarefa = ({ descricao, setDescricao, handleAddTarefa }: Props) => {    

  return (
    <div>
        <input className={styles.input}
            type="text" 
            placeholder="Digite tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
                handleAddTarefa();
            }
        }}
        />
        <button className={styles.button} onClick={handleAddTarefa}>
          ADICIONAR TAREFA
        </button>
    </div>
  )
};

export default NovaTarefa;