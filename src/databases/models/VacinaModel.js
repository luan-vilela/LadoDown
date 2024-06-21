import { Model } from '@nozbe/watermelondb';
import { date, field, readonly } from '@nozbe/watermelondb/decorators';
export class VacinaModel extends Model {
  static table = 'carteirinha';

  @field('idVacina') idVacina;
  @field('nomeVacina') nomeVacina;
  @date('dataAplicacao') dataAplicacao;
  @field('localAplicacao') localAplicacao;
  @field('lote') lote;
  @field('profissionalSaude') profissionalSaude;
  @field('comentarios') comentarios;

  @readonly
  @date('created_at')
  createdAt;

  @readonly
  @date('updated_at')
  updatedAt;
}
