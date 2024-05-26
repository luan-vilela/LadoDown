import { Model } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';

export class TutorModel extends Model {
  static table = 'tutor';

  @field('name')
  name;
  @field('parentesco')
  parentesco;
  @date('dateOfBirth')
  dateOfBirth;
}
