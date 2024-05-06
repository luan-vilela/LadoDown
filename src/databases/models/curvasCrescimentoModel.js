import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export class CurvasCrescimentoModel extends Model {
  static table = 'curvas_crescimento';

  @field('curva')
  curva;
  @field('x')
  x;
  @field('y')
  y;
}
