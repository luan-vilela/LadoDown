import { database } from '../databases/index';

const collections = database.collections.get('curva_crescimento');

export const loadFormData = async () => {
  try {
    const data = await collections.query().fetch();
    return data;
  } catch (error) {
    console.error(`Erro ao carregar os dados da curva de crescimento: ${error}`);
    return null;
  }
};

export const saveFormData = async data => {
  try {
    await database.write(async () => {
      if (data?.id) {
        const row = await collections.find(data.id);
        const response = await row.update(record => {
          record.peso = data.peso;
          record.altura = data.altura;
          record.tamanhoCabeca = data.tamanhoCabeca;
          record.imc = data.imc;
        });
        return response;
      } else {
        const response = await collections.create(record => {
          record.peso = data.peso;
          record.altura = data.altura;
          record.tamanhoCabeca = data.tamanhoCabeca;
          record.imc = data.imc;
        });
        return response;
      }
    });
  } catch (error) {
    console.error(`Erro ao salvar os dados da curva de crescimento: ${error}`);
    return null;
  }
};

export const deleteFormData = async id => {
  try {
    await database.write(async () => {
      const row = await collections.find(id);
      return await row.destroyPermanently();
    });
  } catch (error) {
    console.error(`Erro ao excluir os dados da curva de crescimento: ${error}`);
    return null;
  }
};
