import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schemas';
import { CurvasCrescimentoModel } from './models/curvasCrescimentoModel';
import { CriancaModel } from './models/CriancaModel';
import { AgendaModel } from './models/AgendaModel';
import { RecomendacaoModel } from './models/RecomendacaoModel';

const adapter = new SQLiteAdapter({
  schema: schemas,
});

export const database = new Database({
  adapter,
  modelClasses: [CurvasCrescimentoModel, CriancaModel, AgendaModel, RecomendacaoModel],
});
