import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10b981",
    padding: 5,
  },
  nome: {},
  texto: {
    fontSize: 16,
    textAlign: "justify",
  },
  title: {
    fontSize: 16,
  },
  box1: {
    marginTop: -30,
    height: 300,
    width: 342,
    position: "relative",
    perspective: 80,
    padding: 15,
  },
  box2: {
    transform: [{ rotateX: "45deg" }],
    borderRadius: 45,
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: "#EFEFEF",
    marginVertical: 4,
    marginHorizontal: 8,
  },
  listagem: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10
  },
});

export default { estilo };
