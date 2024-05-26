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
  @field('birthWeight')
  birthWeight;
  @field('birthLength')
  birthLength;
  @field('headCircumferenceAtBirth')
  headCircumferenceAtBirth;
  @field('gestationalAge')
  gestationalAge;
}
