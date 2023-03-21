import { useState } from "react";
import styles from "./App.module.css";
import { GridItem } from "./components/GridItem";
import { calculateImc, Level, levels } from "./helpers/imc";
import leftArrowImage from "./assets/leftarrow.png";

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (!height || !weight) {
      alert("O campo de peso ou altura estão vazios.");
      return;
    }

    setToShow(calculateImc(height, weight));
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeight(0);
    setWeight(0);
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
            Organização Mundial de Saúde (OMS) para calcular o peso ideal de
            cada pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.50 (em metros)"
            value={height > 0 ? height : ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 70.2 (em kg)"
            value={weight > 0 ? weight : ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} data={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="Voltar" width="25" />
              </div>
              <GridItem data={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
