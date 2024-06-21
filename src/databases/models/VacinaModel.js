import { Model } from '@nozbe/watermelondb';
import { field, date, relation } from '@nozbe/watermelondb/decorators';

export class VacinaModel extends Model {
  static table = 'vacinas';

  @field('id_vacina') criancaId;
  @field('nome_vacina') nomeVacina;
  @date('data_aplicacao') dataAplicacao;
  @date('proxima_dose') proximaDose;
  @field('local_aplicacao') localAplicacao;
  @field('lote') lote;
  @field('profissional_saude') profissionalSaude;
  @field('comentarios') comentarios;
  @date('created_at') createdAt;
  @date('updated_at') updatedAt;
}
