import { Q } from '@nozbe/watermelondb';
import { database } from '../databases/index';

const collections = database.get('carteirinha');

export const loadVacinas = async () => {
  try {
    const data = await collections.query().fetch();
    return data;
  } catch (error) {
    console.error(`Erro ao carregar os dados das vacinas: ${error}`);
    return null;
  }
};

export const saveVacina = async data => {
  try {
    await database.write(async () => {
      if (data?.id) {
        const vacina = await collections.find(data.id);
        const response = await vacina.update(record => {
          record.nomeVacina = data.nomeVacina;
          record.dataAplicacao = data.dataAplicacao;
          record.localAplicacao = data.localAplicacao;
          record.lote = data.lote;
          record.profissionalSaude = data.profissionalSaude;
          record.comentarios = data.comentarios;
        });
        console.log('Vacina atualizada:', response);
        return response;
      } else {
        const response = await collections.create(record => {
          record.idVacina = data.idVacina;
          record.nomeVacina = data.nomeVacina;
          record.dataAplicacao = data.dataAplicacao;
          record.localAplicacao = data.localAplicacao;
          record.lote = data.lote;
          record.profissionalSaude = data.profissionalSaude;
          record.comentarios = data.comentarios;
        });

        return response;
      }
    });
  } catch (error) {
    console.error(`Erro ao salvar os dados da vacina: ${error}`);
    return null;
  }
};

export const getVacinaRegistrada = async idVacina => {
  try {
    const vacinas = await collections.query(Q.where('idVacina', `${idVacina}`)).fetch();

    return vacinas[0] || null;
  } catch (error) {
    console.error(`Erro ao buscar vacina registrada: ${error}`);
    throw error;
  }
};

export const deleteVacina = async id => {
  try {
    await database.write(async () => {
      const vacina = await collections.find(id);
      return await vacina.destroyPermanently();
    });
  } catch (error) {
    console.error(`Erro ao excluir os dados da vacina: ${error}`);
    return null;
  }
};
