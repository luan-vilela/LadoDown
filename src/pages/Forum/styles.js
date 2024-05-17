import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 20,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#10b981',
  },
  card: {
    flexDirection: 'column' /* Arrange children in a column */,
    width: 390 /* Set the width of the card */,
    height: 150,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
  },
  header: {
    backgroundColor: '#c7ccbe',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    padding: 5,
  },
  nome: {
    textAlign: 'center',
    fontSize: 16,
  },
  content: {
    padding: 10,
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  cardFooter: {},
  containerListagem: {
    flex: 1,
    backgroundColor: '#10b981',
    padding: 10,
  },
  listagem: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCommentsText: {
    fontSize: 18,
    textAlign: 'center',
  }
});

export default { estilo };
