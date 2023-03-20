import { useState } from "react";
import styles from "./App.module.css";
import { GridItem } from "./components/GridItem";
import { calculateImc, levels } from "./helpers/imc";

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleCalculateButton = () => {
    if (!height || !weight) {
      alert("O campo de peso ou altura estão vazios.");
      return;
    }

    return calculateImc(height, weight);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <h1>Calculadora IMC</h1>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h2>Calcule o seu IMC:</h2>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde (OMS) para calcular peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.50 (em metros)"
            value={height > 0 ? height : ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 70.2 (em kg)"
            value={weight > 0 ? weight : ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
