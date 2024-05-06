import { tableSchema } from '@nozbe/watermelondb';

export const criancaSchema = tableSchema({
  name: 'criancas',
  columns: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'sex',
      type: 'string',
    },
    {
      name: 'dateOfBirth',
      type: 'number',
    },
  ],
});
