import styles from "./page.module.css";
import Grid from "./components/grid";
import Title from "./components/title";
import NovaTarefa from "./components/nova-tarefa";
import Tarefa from "@/types/types";
import { useState } from "react";

export default function Home() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [descricao, setDescricao] = useState("");
  const handleAddTarefa = () => {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      descricao: descricao,
      concluida: false
    }

    if (descricao.trim() === "") {
      alert("Escreva uma tarefa!");
      return;
    } else {
    setTarefas([...tarefas, novaTarefa]);
    setDescricao("");
    }
  }

  return (
    <main className={styles.main}>
      <Title title="Administre suas tarefas aqui!"/>
      <Grid tarefas={tarefas}/>
      <NovaTarefa 
        descricao={descricao} 
        setDescricao={setDescricao}
        handleAddTarefa={handleAddTarefa}
      />
    </main>
    
  );
}
