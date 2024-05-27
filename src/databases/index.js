import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schemas';
import { CriancaModel } from './models/CriancaModel';
import { AgendaModel } from './models/AgendaModel';
import { TutorModel } from './models/TutorModel';
import { RecomendacaoModel } from './models/RecomendacaoModel';
import { CurvaCrescimentoModel } from './models/CurvaCrescimentoModel';

const adapter = new SQLiteAdapter({
  schema: schemas,
});

export const database = new Database({
  adapter,
  modelClasses: [CriancaModel, AgendaModel, RecomendacaoModel, TutorModel, CurvaCrescimentoModel],
});
