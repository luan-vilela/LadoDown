import { database } from '../databases/index';

const collections = database.get('criancas');

export const loadFormData = async () => {
  try {
    const response = await collections.query().fetch();
    const data = response[0];

    const responseData = {
      id: data.id,
      name: data.name,
      sex: data.sex,
      dateOfBirth: data.dateOfBirth,
      birthWeight: data.birthWeight,
      birthLength: data.birthLength,
      headCircumferenceAtBirth: data.headCircumferenceAtBirth,
      gestationalAge: data.gestationalAge,
    };

    return responseData;
  } catch (err) {
    console.error(`Erro ao carregar dados da criança: ${err}`);
    return null;
  }
};

export const saveFormData = async data => {
  try {
    await database.write(async () => {
      if (data?.id) {
        const record = await collections.find(data.id);
        const response = await record.update(post => {
          post.name = data.name;
          post.sex = data.sex;
          post.dateOfBirth = data.dateOfBirth;
          post.birthWeight = data.birthWeight;
          post.birthLength = data.birthLength;
          post.headCircumferenceAtBirth = data.headCircumferenceAtBirth;
          post.gestationalAge = data.gestationalAge;
        });
        return response;
      } else {
        const response = await collections.create(post => {
          post.name = data.name;
          post.sex = data.sex;
          post.dateOfBirth = data.dateOfBirth;
          post.birthWeight = data.birthWeight;
          post.birthLength = data.birthLength;
          post.headCircumferenceAtBirth = data.headCircumferenceAtBirth;
          post.gestationalAge = data.gestationalAge;
        });
        return response;
      }
    });
  } catch (err) {
    console.error(`Erro ao salvar saveFormData: ${err}`);
    return null;
  }
};
