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
  ],
});
