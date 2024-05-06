import { Model } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';

export class CriancaModel extends Model {
  static table = 'criancas';

  @field('name')
  name;
  @field('sex')
  sex;
  @date('dateOfBirth')
  dateOfBirth;
}
