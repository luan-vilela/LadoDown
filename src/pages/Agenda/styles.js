import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "80%", // Define a largura do container para 80% da largura da tela
    alignItems: "center", // Centraliza horizontalmente
    marginTop: 100, // Define um espaçamento superior de 100 unidades
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#10b981",
  },
  icon: {
    marginRight: 10,
  },
  rodape: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },

  descricao: {
    fontSize: 14,
    textAlign: "justify",
  },
});
