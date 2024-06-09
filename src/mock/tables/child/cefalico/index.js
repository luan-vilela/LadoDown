import { TABELA_CEFALICA_MASCULINO } from './masculino';
import { TABELA_CEFALICA_FEMININA } from './feminino';

const percentis = ['p3', 'p10', 'p25', 'p50', 'p75', 'p90', 'p97'];
const cors = ['black', 'red', 'orange', 'green', 'orange', 'red', 'black'];

export const table_cefalica_child = sexy => {
  const conjuntosDeDados = [];

  const table = sexy === 'M' ? TABELA_CEFALICA_MASCULINO : TABELA_CEFALICA_FEMININA;

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
