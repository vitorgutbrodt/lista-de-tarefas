"use client";

import styles from "./page.module.css";
import Grid from "./components/grid";
import Title from "./components/title";
import NovaTarefa from "./components/nova-tarefa";
import Tarefa from "@/types/types";
import { useState, useEffect } from "react";
import useContadorTarefas from "./hooks/useContadorTarefas";

export default function Home() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {  // trecho para carregar tarefas salvas no localStorage "getItem"
    const dados = localStorage.getItem("tarefas");

    if (dados) {
      setTarefas(JSON.parse(dados));
    }
  }, []);

  useEffect(() => { // trecho para salvar tarefas no localStorage "setItem"
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}, [tarefas]);

  const contadorTarefas = useContadorTarefas(tarefas);

  const alternarConcluida = (id: number) => { // função para alternar o estado de conclusão da tarefa
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  }

  const excluirTarefa = (id: number) => { // meio óbvio, mas função para excluir tarefa
  const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);

  setTarefas(novasTarefas);
  };

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
      <Title title={`Você tem ${contadorTarefas} tarefas`} />
      <Grid tarefas={tarefas} alternarConcluida={alternarConcluida} excluirTarefa={excluirTarefa} />
      <NovaTarefa 
        descricao={descricao} 
        setDescricao={setDescricao}
        handleAddTarefa={handleAddTarefa}
      />
    </main>
    
  );
}
