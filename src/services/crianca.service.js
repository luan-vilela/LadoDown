// vacinaService.js

import { database } from '../databases'; // Importe a instância do banco de dados

const vacinasCollection = database.collections.get('vacinas'); // Obtém a coleção 'vacinas' do banco de dados

export const loadVacinas = async () => {
  try {
    const vacinas = await vacinasCollection.query().fetch(); // Consulta todas as vacinas no banco de dados
    return vacinas;
  } catch (error) {
    console.error(`Erro ao carregar as vacinas: ${error}`);
    throw error; // Lança o erro para que o componente possa lidar com ele
  }
};

export const saveVacina = async (
  idVacina,
  nomeVacina,
  dataAplicacao,
  proximaDose,
  localAplicacao,
  lote,
  profissionalSaude,
  comentarios
) => {
  try {
    await database.write(async () => {
      const vacina = await vacinasCollection.create(novaVacina => {
        novaVacina.id_vacina = idVacina;
        novaVacina.nome_vacina = nomeVacina;
        novaVacina.data_aplicacao = dataAplicacao;
        novaVacina.proxima_dose = proximaDose;
        novaVacina.local_aplicacao = localAplicacao;
        novaVacina.lote = lote;
        novaVacina.profissional_saude = profissionalSaude;
        novaVacina.comentarios = comentarios;
        novaVacina.created_at = Date.now(); // Defina a data de criação para o momento atual
        novaVacina.updated_at = Date.now(); // Defina a data de atualização para o momento atual
      });
      return vacina;
    });
  } catch (error) {
    console.error(`Erro ao salvar a vacina: ${error}`);
    throw error;
  }
};

export const deleteVacina = async idVacina => {
  try {
    await database.write(async () => {
      const vacina = await vacinasCollection.find(idVacina);
      await vacina.destroyPermanently();
    });
  } catch (error) {
    console.error(`Erro ao excluir a vacina: ${error}`);
    throw error;
  }
};
