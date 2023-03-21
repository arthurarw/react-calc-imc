export type Level = {
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: number[];
  yourImc?: number;
}

export const levels: Level[] = [
  { title: 'Magreza', color: '#95a5a6', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#2ecc71', icon: 'up', imc: [18.5, 24.9] },
  { title: 'Sobrepeso', color: '#f1c40f', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#e74c3c', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = parseFloat((weight / (height * height)).toFixed(2));

  for(let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      let levelCopy: Level = {...levels[i]};

      levelCopy.yourImc = imc;
      return levelCopy;
    }
  }

  return null;
}
