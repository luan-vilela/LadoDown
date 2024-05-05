import { appSchema } from '@nozbe/watermelondb';

import { curvasCrescimentoSchema } from './curvasCrescimentoSchema';

export const schemas = appSchema({
    version: 1,
    tables: [ curvasCrescimentoSchema ],
});