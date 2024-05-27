import { tableSchema } from '@nozbe/watermelondb';

export const curvaCrescimentoSchema = tableSchema({
  name: 'curva_crescimento',
  columns: [
    {
      name: 'peso',
      type: 'number',
    },
    {
      name: 'altura',
      type: 'number',
    },
    {
      name: 'tamanho_cabeca',
      type: 'number',
    },
    {
      name: 'imc',
      type: 'number',
    },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
