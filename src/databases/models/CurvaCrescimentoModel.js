import { Model } from '@nozbe/watermelondb';
import { field, date, readonly } from '@nozbe/watermelondb/decorators';

export class CurvaCrescimentoModel extends Model {
  static table = 'curva_crescimento';

  @field('peso')
  peso;

  @field('altura')
  altura;

  @field('tamanho_cabeca')
  tamanhoCabeca;

  @field('imc')
  imc;

  @date('data_registro')
  dataRegistro;

  @readonly
  @date('created_at')
  createdAt;

  @readonly
  @date('updated_at')
  updatedAt;
}
