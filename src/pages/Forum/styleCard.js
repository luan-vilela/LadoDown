import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10b981",
  },
  card: {
    paddingHorizontal: 10,
    width: 350,
    margin: 5,
    top: 10,
  },
  cardContainer: {
    height: 230,
    backgroundColor: "#0ea774",
    borderRadius: 25,
    overflow: "hidden",
    elevation: 5, // Aumentando a elevação para uma sombra mais perceptível
    shadowColor: "#000", // Cor da sombra
    shadowRadius: 4, // Raio da sombra
    transform: [{ rotateX: "8deg" }], // Ajustando a rotação para um efeito mais sutil
    background: `linear-gradient(to bottom right, #0ea774, #0ea7a4)`,
  },
  header: {
    alignItems: "center",
  },
  imagemContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    width: 50,
    height: 50,
    borderRadius: 25, // Aumentando o raio de canto para um visual mais suave
    borderWidth: 2, // Aumentando a largura da borda para um visual mais robusto
    borderColor: "#ffffff", // Mudando a cor da borda para branco para melhor contraste
  },
  title: {
    top: 5,
    fontSize: 24, // Aumentei o tamanho da fonte para 24
    fontWeight: "600", // Ajustei o peso da fonte para 600 para dar um pouco mais de destaque
    paddingHorizontal: 20, // Aumentei o espaçamento horizontal para 20 para melhorar o espaçamento nas laterais
  },
  content: {
    padding: 10,
  },
  nome: {
    top: 5,
    color: "#ffffff", // Usando branco puro para garantir consistência
    fontSize: 18, // Aumentando um pouco o tamanho da fonte para maior destaque
    fontWeight: "700", // Usando um valor mais robusto para o peso da fonte
    textAlign: "center",
    textTransform: "uppercase", // Convertendo o texto para maiúsculas para uma aparência mais forte
    letterSpacing: 1, // Adicionando um pequeno espaçamento entre as letras para melhor legibilidade
    marginBottom: 2,
  },
  descricao: {
    top: 10,
    fontSize: 15, // Aumentando um pouco o tamanho da fonte para melhor legibilidade
    color: "#ffffff", // Usando branco puro para garantir consistência
    textAlign: "justify",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adicionando um fundo semitransparente para melhor contraste com o conteúdo
    paddingVertical: 10, // Adicionando espaço vertical ao redor do conteúdo do rodapé
  },
  footerText: {
    top: -2,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#ffffff", // Definindo a cor do texto para branco para melhor contraste com o fundo semitransparente
    fontSize: 12, // Aumentando um pouco o tamanho da fonte para maior destaque
  },
});

export default { estilo };
