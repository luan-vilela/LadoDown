import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    marginTop: 50,
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
    marginBottom: 10,
  },
  link: {
    color: "blue", // Cor do link
    textDecorationLine: "underline", // Adiciona sublinhado ao link
  },
});
