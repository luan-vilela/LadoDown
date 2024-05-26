import { tableSchema } from '@nozbe/watermelondb';

export const tutorSchema = tableSchema({
  name: 'tutor',
  columns: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'dateOfBirth',
      type: 'number',
    },
    {
      name: 'parentesco',
      type: 'string',
    },
  ],
});
