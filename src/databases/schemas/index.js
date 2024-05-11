import { appSchema } from '@nozbe/watermelondb';

import { curvasCrescimentoSchema } from './curvasCrescimentoSchema';
import { criancaSchema } from './criancaSchema ';
import { agendaSchema } from './agendaSchema';

export const schemas = appSchema({
  version: 3,
  tables: [curvasCrescimentoSchema, criancaSchema, agendaSchema],
});
