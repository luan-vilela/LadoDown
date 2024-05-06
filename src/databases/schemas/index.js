import { appSchema } from '@nozbe/watermelondb';

import { curvasCrescimentoSchema } from './curvasCrescimentoSchema';
import { criancaSchema } from './criancaSchema ';

export const schemas = appSchema({
  version: 1,
  tables: [curvasCrescimentoSchema, criancaSchema],
});
