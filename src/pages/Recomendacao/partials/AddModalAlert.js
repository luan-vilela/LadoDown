import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FormControl } from 'native-base';
import { database } from '../../../databases/index';
import CustomModal from '../../../components/CustomModal';

export default function AddModalAlert({ showModal, setShowModal, refetch }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [observacao, setObservacao] = useState('');

  const saveData = async () => {
    try {
      await database.write(async () => {
        await database.get('recomendacao').create(recomendacao => {
          recomendacao.nome = nome;
          recomendacao.descricao = descricao;
          recomendacao.observacao = observacao;
        });
      });
      refetch();
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao salvar o evento:', error);
    }
  };

  return (
    <CustomModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      CancelBtn={'fechar'}
      header={'Recomendações e Alergias'}
      onPress={saveData}>
      <View style={styles.containerBloco}>
        <FormControl isRequired>
          <FormControl.Label>Nome</FormControl.Label>
          <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
          <FormControl.Label>Descrição</FormControl.Label>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
          />
          <FormControl.Label>Observação</FormControl.Label>
          <TextInput
            style={styles.input}
            placeholder="Observação"
            value={observacao}
            onChangeText={setObservacao}
          />
        </FormControl>
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  containerBloco: {
    padding: 15,
  },
  input: {
    height: 40,
    width: '100%', // Corrigido para ocupar 100% da largura do container
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
