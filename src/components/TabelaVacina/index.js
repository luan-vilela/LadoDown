import React, { useState, useEffect } from 'react';
import { ScrollView, View, Alert, Modal, TextInput, TouchableOpacity, Linking } from 'react-native';
import * as S from './style';

import { COLOR_VACCINE, VACCINES } from '../../mock/vaccines';
import { loadVacinas, saveVacina, getVacinaRegistrada } from '../../services/vacina.service';
import { Button, HStack, Input, VStack, Text, FormControl, Image } from 'native-base';
import DateModal from '../Modal/DateModal';
import { Controller, useForm } from 'react-hook-form';
import { differenceInDays, format } from 'date-fns';
import { loadFormData } from '../../services/crianca.service';

const TabelaVacina = () => {
  const vaccines = VACCINES;
  const colors = COLOR_VACCINE;
  const [vacinasCarregadas, setVacinasCarregadas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [selectedVacina, setSelectedVacina] = useState(null);
  const [dataAplicacao, setDataAplicacao] = useState('');
  const [localAplicacao, setLocalAplicacao] = useState('');
  const [lote, setLote] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [profissionalSaude, setProfissionalSaude] = useState('');
  const [vacinaRegistrada, setVacinaRegistrada] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [now, setNow] = useState(new Date());
  const [crianca, setCrianca] = useState(null);
  const [diasTotais, setDiasTotais] = useState(99999);

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  async function carregarVacinas() {
    try {
      const vacinas = await loadVacinas();
      console.log(vacinas);
      if (vacinas) {
        setVacinasCarregadas(vacinas);
      }
    } catch (error) {
      console.error('Erro ao carregar vacinas:', error);
    }
  }

  const loadingCrianca = async () => {
    const response = await loadFormData();
    setCrianca(response);
    const diasTotais = differenceInDays(new Date(), new Date(response?.dateOfBirth));
    setDiasTotais(diasTotais);
  };

  useEffect(() => {
    carregarVacinas();

    if (crianca === null) loadingCrianca();
  }, []);

  const getDaysAtrasos = () => {};

  useEffect(() => {
    if (!selectedVacina) return;
    loadingCrianca();
  }, []);

  const getDate = () => {
    if (now) {
      const dateFormat = format(now, 'dd/MM/yyyy');
      return dateFormat;
    }
    return '';
  };

  async function carregarVacinaRegistrada() {
    if (!selectedVacina) return;

    const vacina = await getVacinaRegistrada(selectedVacina.idDose);

    if (vacina) {
      setVacinaRegistrada(vacina);
      setDataAplicacao(vacina.dataAplicacao);
      setNow(vacina?.dataAplicacao);
      setLocalAplicacao(vacina?.localAplicacao);
      setLote(vacina.lote);
      setProfissionalSaude(vacina.profissionalSaude);
      setComentarios(vacina.comentarios);
    } else {
      setVacinaRegistrada(null);
      setDataAplicacao('');
      setLocalAplicacao('');
      setNow(new Date());
      setLote('');
      setProfissionalSaude('');
      setComentarios('');
    }

    setModalVisible(true);
  }

  useEffect(() => {
    carregarVacinaRegistrada();
  }, [selectedVacina]);

  const formatDate = date => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleRegisterItemClick = async (idDose, vacina) => {
    setSelectedVacina({ idDose, vacina });
  };

  const handleSaveVacina = async () => {
    const newVacina = {
      idVacina: selectedVacina.idDose,
      nomeVacina: selectedVacina.vacina.vacina,
      dataAplicacao: now,
      localAplicacao: localAplicacao,
      lote: lote,
      profissionalSaude: profissionalSaude,
      comentarios: comentarios,
    };

    if (vacinaRegistrada) {
      newVacina['id'] = vacinaRegistrada.id;
    }

    await saveVacina(newVacina);

    carregarVacinas();

    Alert.alert(
      'Vacina Registrada',
      `Vacina ${selectedVacina.vacina.vacina} registrada com sucesso.`,
      [{ text: 'OK' }],
      { cancelable: false }
    );

    setModalVisible(false);
    setDataAplicacao('');
    setLocalAplicacao('');
    setLote('');
    setProfissionalSaude('');
    setComentarios('');
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedVacina(null);
    setDataAplicacao('');
    setLocalAplicacao('');
    setLote('');
    setProfissionalSaude('');
    setComentarios('');
  };

  const handleExpandDetails = async () => {
    try {
      setDetailsModalVisible(true);
    } catch (error) {
      console.error('Erro ao carregar detalhes da vacina:', error);
      Alert.alert(
        'Erro',
        'Não foi possível carregar os detalhes da vacina. Tente novamente mais tarde.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  };

  const handleCloseDetailsModal = () => {
    setDetailsModalVisible(false);
  };

  const handlePress = link => {
    const url = `${link}`; // URL externa que você deseja abrir

    Linking.openURL(url).catch(err => console.error('Erro ao abrir o link:', err));
  };

  const validVacine = esquema => {
    if (esquema.minimo < diasTotais && diasTotais < esquema.maximo) {
      return 'red';
    }
    return '';
  };

  return (
    <ScrollView horizontal={true}>
      <S.CardContainer>
        {vaccines.map((item, i) => (
          <>
            {i === 0 && <S.BoxDiv>Até 12 meses</S.BoxDiv>}
            {i === 2 && <S.BoxDiv>A partir de 12 meses</S.BoxDiv>}
            <S.TableContainer key={i}>
              {item.map((vaccine, j) => (
                <S.TableItem key={j}>
                  <S.TableHeader style={{ backgroundColor: colors[(i * 5 + j) % colors.length] }}>
                    {vaccine.vacina}
                  </S.TableHeader>
                  <S.Register>
                    {vaccine.esquemaDosagem.map((esquema, index) => {
                      const vacinaCarregada = vacinasCarregadas.find(
                        v => v.idVacina === esquema.id
                      );

                      return (
                        <S.RegisterItem
                          key={index}
                          style={{ backgroundColor: colors[(i * 5 + j) % colors.length] }}
                          onPress={() => handleRegisterItemClick(esquema.id, vaccine)}>
                          <S.Dose style={{ backgroundColor: validVacine(esquema) }}>
                            {esquema.dose}
                          </S.Dose>
                          <S.RegisterDate>
                            <Text>
                              Data:{' '}
                              {vacinaCarregada
                                ? formatDate(vacinaCarregada.dataAplicacao)
                                : '__/__/____'}
                            </Text>
                            <Text>Lote: {vacinaCarregada ? vacinaCarregada.lote : ''}</Text>
                            <Text>
                              Unidade: {vacinaCarregada ? vacinaCarregada.localAplicacao : ''}
                            </Text>
                            {}
                          </S.RegisterDate>
                        </S.RegisterItem>
                      );
                    })}
                  </S.Register>
                </S.TableItem>
              ))}
            </S.TableContainer>
          </>
        ))}
      </S.CardContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <ScrollView>
          <S.ModalView>
            <S.ModalTitle>Informações da Vacina</S.ModalTitle>
            <Text>Vacina: {selectedVacina?.vacina.vacina}</Text>

            <VStack space={3} mt="5" w={'100%'}>
              {/* <Input
                placeholder="Data de Aplicação"
                value={dataAplicacao}
                onChangeText={text => setDataAplicacao(text)}
              /> */}

              <Controller
                control={control}
                name="dt"
                rules={{
                  // required: 'Data de nascimento é obrigatória',
                  pattern: {
                    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                    message: 'Data Nascimento inválida!',
                  },
                }}
                render={() => (
                  <FormControl isInvalid={'dt' in errors} w="100%">
                    <FormControl.Label>Data da vacinação</FormControl.Label>
                    <Input
                      placeholder="__/__/____"
                      value={getDate()}
                      w="100%"
                      onTouchStart={() => setShowDate(true)}
                      onBlur={() => setValue('dt', getDate())}
                    />
                  </FormControl>
                )}
              />

              <FormControl w="100%">
                <FormControl.Label>Local de Aplicação</FormControl.Label>
                <Input
                  placeholder="Upa, Posto, Hospital..."
                  value={localAplicacao}
                  onChangeText={text => setLocalAplicacao(text)}
                />
              </FormControl>
              <FormControl w="100%">
                <FormControl.Label>Lote</FormControl.Label>
                <Input placeholder="12dde8" value={lote} onChangeText={text => setLote(text)} />
              </FormControl>
              <FormControl w="100%">
                <FormControl.Label>Profissional de Saúde</FormControl.Label>
                <Input
                  placeholder="João Carlos"
                  value={profissionalSaude}
                  onChangeText={text => setProfissionalSaude(text)}
                />
              </FormControl>

              <FormControl w="100%">
                <FormControl.Label>Comentários</FormControl.Label>
                <Input
                  placeholder="...."
                  value={comentarios}
                  onChangeText={text => setComentarios(text)}
                />
              </FormControl>
            </VStack>

            <S.ButtonContainer>
              <HStack space={3} mt="5" w={'100%'}>
                <Button
                  variant={'link'}
                  colorScheme="emerald"
                  onPress={handleExpandDetails}
                  style={{ marginBottom: 10 }}>
                  Mais Informações
                </Button>

                <Button variant={'outline'} onPress={handleCloseModal} style={{ marginBottom: 10 }}>
                  Cancelar
                </Button>
                <Button onPress={handleSaveVacina} style={{ marginBottom: 10 }}>
                  Salvar
                </Button>
              </HStack>
            </S.ButtonContainer>
          </S.ModalView>
        </ScrollView>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={detailsModalVisible}
        onRequestClose={() => setDetailsModalVisible(false)}>
        <ScrollView>
          <S.ModalView>
            <S.ModalTitle>Detalhes da Vacina</S.ModalTitle>
            <Text>Nome Completo: {selectedVacina?.vacina.nome_completo}</Text>
            <Text>Indicação: {selectedVacina?.vacina.indicacao}</Text>
            <Text>Protege contra: {selectedVacina?.vacina.protege}</Text>
            <Text>Aspecto Técnico: {selectedVacina?.vacina.aspectoTecnico}</Text>
            <Text>Local de Aplicação: {selectedVacina?.vacina.localAplicacao}</Text>
            <Text>Do que é feita: {selectedVacina?.vacina.doQueEFeita}</Text>
            <Text>Contraindicações:</Text>
            {selectedVacina?.vacina.contraindicacao.map((contra, index) => (
              <Text key={index}>- {contra}</Text>
            ))}
            <Text>Esquema de Dosagem:</Text>
            {selectedVacina?.vacina.esquemaDosagem.map((dose, index) => (
              <View key={index}>
                <Text>Dose: {dose.dose}</Text>
                <Text>Idade Mínima: {Math.round(Number(dose.minimo) / 12)} meses</Text>
                <Text>Idade Máxima: {Math.round(Number(dose.maximo) / 12)} meses</Text>
              </View>
            ))}

            <Image
              source={{ uri: selectedVacina?.vacina?.foto }}
              style={{ width: 200, height: 200, marginTop: 10, marginBottom: 10 }}
              resizeMode="contain"
            />
            <Button variant={'link'} onPress={() => handlePress(selectedVacina?.vacina?.url)}>
              Saiba mais
            </Button>

            <S.ButtonContainer>
              <Button colorScheme={'emerald'} onPress={handleCloseDetailsModal}>
                Fechar
              </Button>
            </S.ButtonContainer>
          </S.ModalView>
        </ScrollView>
      </Modal>

      <DateModal
        setShowModal={setShowDate}
        showModal={showDate}
        setValue={item => setNow(item)}
        _day={now?.getDate() || 1}
        _month={now?.getMonth() || 0}
        _year={now?.getFullYear() || 2024}
      />
    </ScrollView>
  );
};

export default TabelaVacina;
