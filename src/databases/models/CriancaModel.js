import { Model } from '@nozbe/watermelondb';
import { date, field, readonly } from '@nozbe/watermelondb/decorators';

export class CriancaModel extends Model {
  static table = 'criancas';

  @field('name')
  name;

  @field('sex')
  sex;

  @date('date_of_birth')
  dateOfBirth;

  @field('birth_weight')
  birthWeight;

  @field('birth_length')
  birthLength;

  @field('head_circumference_at_birth')
  headCircumferenceAtBirth;

  @field('gestational_age')
  gestationalAge;

  @readonly
  @date('created_at')
  createdAt;

  @readonly
  @date('updated_at')
  updatedAt;
}
