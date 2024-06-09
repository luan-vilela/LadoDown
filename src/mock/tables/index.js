import { table_cefalica_child } from './child/cefalico';
import { table_estatura_child } from './child/estatura';
import { table_imc_child } from './child/imc';
import { table_peso_child } from './child/peso';
import { table_cefalica_young } from './young/cefalico';
import { table_estatura_young } from './young/estatura';
import { table_imc_young } from './young/imc';
import { table_peso_young } from './young/peso';

export const getTableDate = (sexy, type, isChild) => {
  if (type === 'peso') return isChild ? table_peso_child(sexy) : table_peso_young(sexy);

  if (type === 'altura') return isChild ? table_estatura_child(sexy) : table_estatura_young(sexy);

  if (type === 'cefalica') return isChild ? table_cefalica_child(sexy) : table_cefalica_young(sexy);

  if (type === 'imc') return isChild ? table_imc_child(sexy) : table_imc_young(sexy);
};
