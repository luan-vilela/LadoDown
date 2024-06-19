import { Flex } from 'native-base';
import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titulo: {
    padding: 10,
    color: '#12AC6B',
    fontSize: 26,
    textAlign: 'center',
  },
  subTitulo: {
    marginTop: 15,
    color: '#12AC6B',
    marginBottom: 10,
    fontSize: 22,
    textAlign: 'left',
  },
  descricao: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left',
    color: '#333',
  },
  author: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  date: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 15,
  },
  referencia: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default { estilo };
