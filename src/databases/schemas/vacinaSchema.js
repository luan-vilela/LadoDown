import { tableSchema } from '@nozbe/watermelondb';

export const vacinaSchema = tableSchema({
  name: 'vacinas',
  columns: [
    { name: 'id_vacina', type: 'string', isIndexed: true },
    { name: 'nome_vacina', type: 'string' },
    { name: 'data_aplicacao', type: 'number' },
    { name: 'proxima_dose', type: 'number', isOptional: true },
    { name: 'local_aplicacao', type: 'string', isOptional: true },
    { name: 'lote', type: 'string', isOptional: true },
    { name: 'profissional_saude', type: 'string', isOptional: true },
    { name: 'comentarios', type: 'string', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
