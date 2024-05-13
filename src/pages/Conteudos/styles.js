import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  titulo: {
    backgroundColor: "#12AC6B",
    color: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontWeight: "bold",
  },
  title: {
    color: "#12AC6B",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  imagemGrande: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  card: {
    flexDirection: "column",
    borderColor: "#E0E0E0",
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
  imagemPequena: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
  },
  descricao: {
    textAlign: "justify",
    marginBottom: 10,
    fontSize: 12,
  },
  autor: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  tag: {
    backgroundColor: "#FF125F",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  tagLateral: {
    backgroundColor: "#FF125F",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
    position: "absolute",
    top: 0,
    left: 0,
  },
  cardLateral: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "white",
    overflow: "hidden",
  },
  tituloImagemLateral: {
    backgroundColor: "#12AC6B",
    color: "white",
    padding: 10,
    fontWeight: "bold",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  imageLateral: {
    width: 100,
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

export default { estilo };
