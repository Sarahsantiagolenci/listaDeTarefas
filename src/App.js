import "./styles.css";
import { useState } from "react";

export default function App() {
  const [arrayDeTarefas, setArraydeTarefas] = useState([]);

  const [guardarTarefa, setGuardarTarefa] = useState("");

  const CapturarValor = (item) => {
    setGuardarTarefa(item.target.value);
  };

  const AdicionarTarefaNoArray = (item) => {
    setArraydeTarefas(arrayDeTarefas.concat(guardarTarefa));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite sua tarefa"
        onChange={CapturarValor}
      />
      <button onClick={AdicionarTarefaNoArray}>Adicionar tarefa</button>
      <ol>
        {arrayDeTarefas.map((item) => (
          <>
            <li>{item}</li>
          </>
        ))}
      </ol>
    </div>
  );
}
