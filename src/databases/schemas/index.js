import { appSchema } from '@nozbe/watermelondb';

import { curvasCrescimentoSchema } from './curvasCrescimentoSchema';
import { criancaSchema } from './criancaSchema ';
import { agendaSchema } from './agendaSchema';
import { recomendacaoSchema } from './recomendacaoSchema';

export const schemas = appSchema({
  version: 4,
  tables: [curvasCrescimentoSchema, criancaSchema, agendaSchema, recomendacaoSchema],
});
