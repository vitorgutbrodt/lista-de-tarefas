import styles from "./page.module.css";
import Grid from "./components/grid";
import Title from "./components/title";

const tarefas = [
  { id: 1, descricao: "Fazer compras", concluida: true },
  { id: 2, descricao: "Lavar o carro", concluida: true },
  { id: 3, descricao: "Estudar TypeScript", concluida: false } // só pra testar, depois vamos retirar isso
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Title title="Administre suas tarefas aqui!"/>
      <Grid tarefas={tarefas}/>
    </main>
    
  );
}
