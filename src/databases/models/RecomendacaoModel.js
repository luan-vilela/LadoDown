import { Model } from '@nozbe/watermelondb';
import { date, field } from '@nozbe/watermelondb/decorators';

export class RecomendacaoModel extends Model {
  static table = 'recomendacao';

  @field('nome')
  nome;

  @field('descricao')
  descricao;

  @field('observacao')
  observacao;
}
