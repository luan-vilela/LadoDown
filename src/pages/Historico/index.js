import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import HeaderAdmin from '../../components/HeaderAdmin';
import { NativeBaseProvider } from 'native-base';
import { database } from '../../databases/index';
import moment from 'moment';

export default function Historico() {
  const [historicoList, setHistoricoList] = useState([]);

  const fetchHistoricoData = async () => {
    try {
      // Buscar dados da tabela recomendacao
      const recomendacaoData = await database.get('recomendacao').query().fetch();

      // Buscar dados da tabela agenda
      const agendaData = await database.get('agenda').query().fetch();

      // Combine os dados das duas tabelas em uma única lista
      const combinedData = [
        ...recomendacaoData.map(item => ({
          tipo: 'Recomendação',
          nome: item.nome,
          descricao: item.descricao,
          observacao: item.observacao,
        })),
        ...agendaData.map(item => ({
          tipo: 'Agenda',
          eventTitle: item.eventTitle,
          notificationTime: item.notificationTime,
        })),
      ];

      setHistoricoList(combinedData);
    } catch (error) {
      console.error('Erro ao buscar os dados do histórico:', error);
    }
  };

  useEffect(() => {
    fetchHistoricoData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.tipo}</Text>
      <Text style={styles.cell}>{item.tipo === 'Recomendação' ? item.nome : item.eventTitle}</Text>
      <Text style={styles.cell}>{item.tipo === 'Recomendação' ? item.descricao : ''}</Text>
      <Text style={styles.cell}>{item.tipo === 'Recomendação' ? item.observacao : ''}</Text>
    </View>
  );

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Histórico Paciente'} />
      <View style={styles.container}>
      <View style={styles.tabela}>

        <View style={styles.row}>
          <Text style={styles.header}>Tipo</Text>
          <Text style={styles.header}>Nome / Título</Text>
          <Text style={styles.header}>Descrição</Text>
          <Text style={styles.header}>Observação</Text>
        </View>
        <FlatList
          data={historicoList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10b981',
    paddingHorizontal: 20,
    paddingTop: 20,
    fontSize: 13,
  },
  tabela: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: "black"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12, // Aumentei o padding vertical
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13, // Ajustei o tamanho da fonte
  },
  header: {
    flex: 1,
    fontSize: 14, // Ajustei o tamanho do cabeçalho
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
