import { table_cefalica_young } from './cefalico';
import { table_estatura_young } from './estatura';
import { table_peso_young } from './peso';
import { table_imc_young } from './imc';

export const getTableChild = (sexy, type) => {
  if (type === 'peso') return table_peso_young(sexy);

  if (type === 'altura') return table_estatura_young(sexy);

  if (type === 'cefalica') return table_cefalica_young(sexy);

  if (type === 'imc') return table_imc_young(sexy);
};
