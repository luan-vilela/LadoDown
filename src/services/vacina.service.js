import { database } from '../databases/index';

const collections = database.collections.get('vacinas');

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
          record.nome_vacina = data.nome_vacina;
          record.data_aplicacao = data.data_aplicacao;
          record.proxima_dose = data.proxima_dose;
          record.local_aplicacao = data.local_aplicacao;
          record.lote = data.lote;
          record.profissional_saude = data.profissional_saude;
          record.comentarios = data.comentarios;
        });
        return response;
      } else {
        const response = await collections.create(record => {
          record.id_vacina = data.id_vacina;
          record.nome_vacina = data.nome_vacina;
          record.data_aplicacao = data.data_aplicacao;
          record.proxima_dose = data.proxima_dose;
          record.local_aplicacao = data.local_aplicacao;
          record.lote = data.lote;
          record.profissional_saude = data.profissional_saude;
          record.comentarios = data.comentarios;
          record.created_at = data.created_at;
          record.updated_at = data.updated_at;
        });
        return response;
      }
    });
  } catch (error) {
    console.error(`Erro ao salvar os dados da vacina: ${error}`);
    return null;
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
