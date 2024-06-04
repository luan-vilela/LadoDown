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
      name: 'date_of_birth',
      type: 'number',
    },
    {
      name: 'birth_weight',
      type: 'string',
    },
    {
      name: 'birth_length',
      type: 'string',
    },
    {
      name: 'head_circumference_at_birth',
      type: 'string',
    },
    {
      name: 'gestational_age',
      type: 'string',
    },
    {
      name: 'created_at',
      type: 'number',
    },
    {
      name: 'updated_at',
      type: 'number',
    },
  ],
});
