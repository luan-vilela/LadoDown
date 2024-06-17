import { TABELA_ESTATURA_MASCULINO } from '../estatura/masculino';
import { TABELA_PESO_MASCULINO } from '../peso/masculino';

export const TABELA_IMC_MASCULINO = TABELA_ESTATURA_MASCULINO.map((altura, index) => {
  const peso = TABELA_PESO_MASCULINO[index];

  const imcP3 = (peso.p3 / (altura.p3 / 100) ** 2).toFixed(2);
  const imcP10 = (peso.p10 / (altura.p10 / 100) ** 2).toFixed(2);
  const imcP25 = (peso.p25 / (altura.p25 / 100) ** 2).toFixed(2);
  const imcP50 = (peso.p50 / (altura.p50 / 100) ** 2).toFixed(2);
  const imcP75 = (peso.p75 / (altura.p75 / 100) ** 2).toFixed(2);
  const imcP90 = (peso.p90 / (altura.p90 / 100) ** 2).toFixed(2);
  const imcP97 = (peso.p97 / (altura.p97 / 100) ** 2).toFixed(2);

  return {
    age: altura.age,
    p3: Number(imcP3),
    p10: Number(imcP10),
    p25: Number(imcP25),
    p50: Number(imcP50),
    p75: Number(imcP75),
    p90: Number(imcP90),
    p97: Number(imcP97),
  };
});
