"use client";

import styles from "./novatarefa.module.css";

type Props = {
    descricao: string;
    setDescricao: (descricao: string) => void;
    handleAddTarefa: () => void;
};

const NovaTarefa = ({ descricao, setDescricao, handleAddTarefa }: Props) => {    

  return (
    <div>
        <input 
            type="text" 
            placeholder="Digite tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
        />
        <button onClick={handleAddTarefa}>ADICIONAR TAREFA</button>
    </div>
  )
};

export default NovaTarefa;