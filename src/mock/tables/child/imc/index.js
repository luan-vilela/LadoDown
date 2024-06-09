import { TABELA_IMC_MASCULINO } from './masculino';
import { TABELA_IMC_FEMININO } from './feminino';

const percentis = ['p3', 'p10', 'p25', 'p50', 'p75', 'p90', 'p97'];
const cors = ['black', 'red', 'orange', 'green', 'orange', 'red', 'black'];

export const table_imc_child = sexy => {
  const conjuntosDeDados = [];

  const table = sexy === 'M' ? TABELA_IMC_MASCULINO : TABELA_IMC_FEMININO;

  percentis.forEach((percentil, index) => {
    const conjunto = {
      label: percentil.toUpperCase(),
      pontos: [],
      color: cors[index],
    };

    table.forEach(item => {
      const ponto = {
        age: item.age,
        value: item[percentil],
      };
      conjunto.pontos.push(ponto);
    });

    conjuntosDeDados.push(conjunto);
  });

  return conjuntosDeDados;
};
