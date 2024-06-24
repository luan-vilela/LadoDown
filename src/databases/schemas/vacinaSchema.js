import { tableSchema } from '@nozbe/watermelondb';

export const vacinaSchema = tableSchema({
  name: 'carteirinha',
  columns: [
    { name: 'idVacina', type: 'string' },
    { name: 'nomeVacina', type: 'string' },
    { name: 'dataAplicacao', type: 'number' },
    { name: 'localAplicacao', type: 'string' },
    { name: 'lote', type: 'string' },
    { name: 'profissionalSaude', type: 'string' },
    { name: 'comentarios', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
