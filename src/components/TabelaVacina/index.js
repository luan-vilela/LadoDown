import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import * as S from './style';

import { COLOR_VACCINE, VACCINES } from '../../mock/vaccines';
import { loadVacinas, saveVacina } from '../../services/vacina.service';

const colorBorder = '#333';

const TabelaVacina = () => {
  const vaccines = VACCINES;
  const colors = COLOR_VACCINE;
  const [vacinasCarregadas, setVacinasCarregadas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVacina, setSelectedVacina] = useState(null);

  useEffect(() => {
    async function carregarVacinas() {
      try {
        const vacinas = await loadVacinas();
        if (vacinas) {
          setVacinasCarregadas(vacinas);
        } else {
          Alert.alert(
            'Erro',
            'Não foi possível carregar as vacinas. Tente novamente mais tarde.',
            [{ text: 'OK' }],
            { cancelable: false }
          );
        }
      } catch (error) {
        console.error('Erro ao carregar vacinas:', error);
        Alert.alert(
          'Erro',
          'Não foi possível carregar as vacinas. Tente novamente mais tarde.',
          [{ text: 'OK' }],
          { cancelable: false }
        );
      }
    }

    carregarVacinas();
  }, []);

  const formatDate = date => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleRegisterItemClick = async (idDose, vacina) => {
    setSelectedVacina({ idDose, vacina });
    setModalVisible(true);
  };

  const handleSaveVacina = async () => {
    try {
      const currentDate = new Date();
      const lote = 'A1B2'; // Exemplo de lote
      const unidade = 'Hospital X'; // Exemplo de unidade

      const newVacina = {
        id_vacina: selectedVacina.idDose,
        nome_vacina: selectedVacina.vacina.vacina,
        data_aplicacao: currentDate.toISOString(),
        proxima_dose: '',
        local_aplicacao: '',
        lote: lote,
        profissional_saude: '',
        comentarios: '',
        created_at: currentDate.toISOString(),
        updated_at: currentDate.toISOString(),
      };

      await saveVacina(newVacina);

      Alert.alert(
        'Vacina Registrada',
        `Vacina ${selectedVacina.vacina.vacina} registrada com sucesso.`,
        [{ text: 'OK' }],
        { cancelable: false }
      );

      setModalVisible(false);
    } catch (error) {
      console.error('Erro ao registrar a vacina:', error);
      Alert.alert(
        'Erro',
        'Não foi possível registrar a vacina. Tente novamente mais tarde.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedVacina(null);
  };

  return (
    <ScrollView horizontal={true}>
      <S.CardContainer>
        {vaccines.map((item, i) => (
          <S.TableContainer key={i}>
            {item.map((vaccine, j) => (
              <S.TableItem key={j}>
                <S.TableHeader style={{ backgroundColor: colors[(i * 5 + j) % colors.length] }}>
                  {vaccine.vacina}
                </S.TableHeader>
                <S.Register>
                  {vaccine.esquemaDosagem.map((esquema, index) => {
                    const vacinaCarregada = vacinasCarregadas.find(
                      v => v.nome_vacina === vaccine.vacina
                    );

                    return (
                      <S.RegisterItem
                        key={index}
                        style={{ backgroundColor: colors[(i * 5 + j) % colors.length] }}
                        onPress={() => handleRegisterItemClick(esquema.id, vaccine)}>
                        <S.Dose>{esquema.dose}</S.Dose>
                        <S.RegisterDate>
                          <Text>
                            Data:{' '}
                            {vacinaCarregada
                              ? formatDate(vacinaCarregada.data_aplicacao)
                              : '__/__/____'}
                          </Text>
                          <Text>Lote: {vacinaCarregada ? vacinaCarregada.lote : ''}</Text>
                          <Text>Unidade: {vacinaCarregada ? vacinaCarregada.unidade : ''}</Text>
                        </S.RegisterDate>
                      </S.RegisterItem>
                    );
                  })}
                </S.Register>
              </S.TableItem>
            ))}
          </S.TableContainer>
        ))}
      </S.CardContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <S.ModalView>
          <S.ModalTitle>Informações da Vacina</S.ModalTitle>
          <Text>Nome da Vacina: {selectedVacina?.vacina.vacina}</Text>
          <TextInput placeholder="Data de Aplicação" keyboardType="numeric" />
          <TextInput placeholder="Local de Aplicação" />
          <TextInput placeholder="Comentários" />
          <S.ButtonContainer>
            <S.Button onPress={handleSaveVacina}>
              <S.ButtonText>Salvar</S.ButtonText>
            </S.Button>
            <S.Button onPress={handleCloseModal}>
              <S.ButtonText>Cancelar</S.ButtonText>
            </S.Button>
          </S.ButtonContainer>
        </S.ModalView>
      </Modal>
    </ScrollView>
  );
};

export default TabelaVacina;
