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
    {
      name: 'birthWeight',
      type: 'number',
    },
    {
      name: 'birthLength',
      type: 'number',
    },
    {
      name: 'headCircumferenceAtBirth',
      type: 'number',
    },
    {
      name: 'gestationalAge',
      type: 'number',
    },
  ],
});
