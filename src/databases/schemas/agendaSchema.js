import { tableSchema } from '@nozbe/watermelondb';

export const agendaSchema = tableSchema({
  name: 'agenda',
  columns: [
    {
      name: 'eventTitle',
      type: 'string',
    },
    {
      name: 'calendarColor',
      type: 'string',
    },
    {
      name: 'notificationTime',
      type: 'number',
    },
    {
      name: 'notificationID',
      type: 'string', // ou outro tipo apropriado, dependendo do ID de notificação que você está usando
    },
  ],
});
