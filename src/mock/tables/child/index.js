import { table_cefalica_child } from './cefalico';
import { table_estatura_child } from './estatura';
import { table_peso_child } from './peso';
import { table_imc_child } from './imc';

export const getTableChild = (sexy, type) => {
  if (type === 'peso') return table_peso_child(sexy);

  if (type === 'altura') return table_estatura_child(sexy);

  if (type === 'cefalica') return table_cefalica_child(sexy);

  if (type === 'imc') return table_imc_child(sexy);
};
