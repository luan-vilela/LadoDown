import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    marginBottom: 30,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  card: {
    top: 10,
    paddingHorizontal: 10,
    width: 300,
    margin: 5,
  },
  cardContainer: {
    height: 230,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    overflow: 'hidden',
    background: `linear-gradient(to bottom right, #0ea774, #0ea7a4)`,
  },
  header: {
    alignItems: 'center',
  },
  imagemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    width: 50,
    height: 50,
    borderRadius: 25, // Aumentando o raio de canto para um visual mais suave
    borderWidth: 2, // Aumentando a largura da borda para um visual mais robusto
    borderColor: '#ffffff', // Mudando a cor da borda para branco para melhor contraste
  },
  title: {
    top: 5,
    fontSize: 24, // Aumentei o tamanho da fonte para 24
    fontWeight: '700', // Ajustei o peso da fonte para 600 para dar um pouco mais de destaque
    paddingHorizontal: 20, // Aumentei o espaçamento horizontal para 20 para melhorar o espaçamento nas laterais
    color: '#595959',
  },
  title2: {
    top: 20,
    fontSize: 24, // Aumentei o tamanho da fonte para 24
    fontWeight: '600', // Ajustei o peso da fonte para 600 para dar um pouco mais de destaque
    paddingHorizontal: 20, // Aumentei o espaçamento horizontal para 20 para melhorar o espaçamento nas laterais
  },
  content: {
    padding: 10,
  },
  nome: {
    color: '#10b981', // Definindo a cor do texto como preto
    fontSize: 18, // Aumentando um pouco o tamanho da fonte para maior destaque
    fontWeight: '600', // Usando um valor mais robusto para o peso da fonte
    textAlign: 'center',
    textTransform: 'capitalize', // Convertendo o texto para maiúsculas para uma aparência mais forte
  },
  description: {
    width: '100%',
    height: '75%',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descricao: {
    fontSize: 16, // Aumentando um pouco o tamanho da fonte para melhor legibilidade
    color: '#000000', // Definindo a cor do texto como preto
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10b981',
    paddingVertical: 10, // Adicionando espaço vertical ao redor do conteúdo do rodapé
  },
  footerText: {
    top: -2,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#ffffff', // Definindo a cor do texto para branco para melhor contraste com o fundo semitransparente
    fontSize: 12, // Aumentando um pouco o tamanho da fonte para maior destaque
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default { estilo };
