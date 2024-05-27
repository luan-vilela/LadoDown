import { Model } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';

export class AgendaModel extends Model {
  static table = 'agenda';

  @field('eventTitle')
  eventTitle;

  @field('calendarColor')
  calendarColor;

  @date('notificationTime')
  notificationTime;

  @field('notificationID')
  notificationID;
}
