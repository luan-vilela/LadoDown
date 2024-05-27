import { tableSchema } from '@nozbe/watermelondb';

export const recomendacaoSchema = tableSchema({
  name: 'recomendacao',
  columns: [
    {
      name: 'nome',
      type: 'string',
    },
    {
      name: 'descricao',
      type: 'string',
    },
    {
      name: 'observacao',
      type: 'string',
    },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
