import { appSchema } from '@nozbe/watermelondb';

import { curvasCrescimentoSchema } from './curvasCrescimentoSchema';
import { criancaSchema } from './criancaSchema ';
import { agendaSchema } from './agendaSchema';
import { tutorSchema } from './tutorSchema';
import { recomendacaoSchema } from './recomendacaoSchema';

export const schemas = appSchema({
  version: 1,
  tables: [curvasCrescimentoSchema, criancaSchema, agendaSchema, recomendacaoSchema, tutorSchema],
});
