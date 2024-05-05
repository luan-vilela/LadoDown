import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';


import { schemas } from './schemas';
import { curvasCrescimentoModel } from './models/curvasCrescimentoModel';


const adapter = new SQLiteAdapter({
    schema: schemas
});

export const database = new Database({
    adapter,
    modelClasses: [curvasCrescimentoModel]
});


