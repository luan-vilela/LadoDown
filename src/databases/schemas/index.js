import { appSchema } from '@nozbe/watermelondb';

import { criancaSchema } from './criancaSchema ';
import { agendaSchema } from './agendaSchema';
import { tutorSchema } from './tutorSchema';
import { recomendacaoSchema } from './recomendacaoSchema';
import { curvaCrescimentoSchema } from './curvaCrescimentoSchema';

export const schemas = appSchema({
  version: 8,
  tables: [criancaSchema, agendaSchema, recomendacaoSchema, tutorSchema, curvaCrescimentoSchema],
});
