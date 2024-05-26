import { appSchema } from '@nozbe/watermelondb';

import { curvasCrescimentoSchema } from './curvasCrescimentoSchema';
import { criancaSchema } from './criancaSchema ';
import { agendaSchema } from './agendaSchema';
import { tutorSchema } from './tutorSchema';

export const schemas = appSchema({
  version: 1,
  tables: [curvasCrescimentoSchema, criancaSchema, agendaSchema, tutorSchema],
});
